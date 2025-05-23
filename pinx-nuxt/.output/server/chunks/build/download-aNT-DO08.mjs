function download(url, name) {
  if (!url) return;
  const a = (void 0).createElement("a");
  a.href = url;
  if (name !== void 0) {
    a.download = name;
  }
  (void 0).body.appendChild(a);
  a.click();
  (void 0).body.removeChild(a);
}

export { download as d };
//# sourceMappingURL=download-aNT-DO08.mjs.map
