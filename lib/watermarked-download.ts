// Export is produced locally: originals are not overwritten or uploaded.
export async function watermarkedDownload(src: string) {
  const image = new Image();
  image.decoding = "async";
  image.src = src;
  await image.decode();
  const scale = Math.min(1, 4096 / Math.max(image.naturalWidth, image.naturalHeight));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
  canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unavailable");
  const w = canvas.width, h = canvas.height;
  ctx.fillStyle = "#f7f5ef";
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(image, 0, 0, w, h);

  // A translucent, iridescent central mark is baked into the image pixels.
  // It remains visible on both light and dark project photographs.
  const size = Math.min(w / 14, h / 5);
  ctx.save();
  ctx.translate(w / 2, h / 2);
  ctx.rotate(-Math.PI / 10);
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const gradient = ctx.createLinearGradient(-w / 3, 0, w / 3, 0);
  gradient.addColorStop(0, "rgba(199,224,227,.62)");
  gradient.addColorStop(.35, "rgba(235,211,166,.68)");
  gradient.addColorStop(.7, "rgba(218,193,226,.62)");
  gradient.addColorStop(1, "rgba(210,232,217,.62)");
  ctx.fillStyle = gradient;
  ctx.strokeStyle = "rgba(25,28,27,.30)";
  ctx.lineWidth = Math.max(1, size / 45);
  ctx.font = `600 ${size}px Georgia, serif`;
  ctx.strokeText("ARDIÇ", 0, -size * .24);
  ctx.fillText("ARDIÇ", 0, -size * .24);
  ctx.font = `600 ${size * .26}px Arial, sans-serif`;
  ctx.strokeText("DESIGN FABRICATION", 0, size * .58);
  ctx.fillText("DESIGN FABRICATION", 0, size * .58);
  ctx.restore();

  const strip = Math.max(28, Math.min(w * .065, h * .12));
  ctx.fillStyle = "rgba(20,25,24,.70)";
  ctx.fillRect(0, h - strip, w, strip);
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = `600 ${Math.min(strip * .3, w / 30)}px Arial, sans-serif`;
  ctx.fillText("ARDIÇ DESIGN FABRICATION · ardicdf.com", w / 2, h - strip / 2);

  const blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob(
    result => result ? resolve(result) : reject(new Error("Image export failed")), "image/jpeg", .94
  ));
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `ardic-design-fabrication-${src.split("/").pop()!.replace(/\.[^.]+$/, "")}.jpg`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  // Allow the browser to begin saving before releasing the blob.
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
  canvas.width = canvas.height = 1;
}
