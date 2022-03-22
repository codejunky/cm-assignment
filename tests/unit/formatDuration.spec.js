import formatDuration from "@/utils/formatDuration";

describe("utils/formatDuration", () => {
  it("should format minutes to `{x} min` if minutes less than 60", () => {
    const formattedStr = formatDuration(45);

    expect(formattedStr).toBe("45 min");
  });

  it("should format minutes to `{x} hr` if minutes divisible by 60", () => {
    const formattedStr = formatDuration(120);

    expect(formattedStr).toBe("2 hr");
  });

  it("should format minutes to `{x} hr {x} min` if minutes greater than and not divisible by 60", () => {
    const formattedStr = formatDuration(86);

    expect(formattedStr).toBe("1 hr 26 min");
  });
});
