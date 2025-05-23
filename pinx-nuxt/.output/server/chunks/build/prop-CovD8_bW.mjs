function smallerSize(size) {
  switch (size) {
    case "tiny":
      return "mini";
    case "small":
      return "tiny";
    case "medium":
      return "small";
    case "large":
      return "medium";
    case "huge":
      return "large";
  }
  throw new Error(`${size} has no smaller size.`);
}

export { smallerSize as s };
//# sourceMappingURL=prop-CovD8_bW.mjs.map
