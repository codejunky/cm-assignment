import formatEnergy from "@/utils/formatEnergy";

describe("utils/formatEnergy", () => {
  it("correctly format energy for users with kJ unit preference", () => {
    const mockDetails = {
      units: {
        energy: "kcal"
      },
      energy: 250
    };
    const formattedEnergy = formatEnergy(mockDetails, "kJ");

    expect(formattedEnergy).toBe("1046 kJ");
  });

  it("correctly format energy for users with kcal unit preference", () => {
    const mockDetails = {
      units: {
        energy: "kJ"
      },
      energy: 774
    };
    const formattedEnergy = formatEnergy(mockDetails, "kcal");

    expect(formattedEnergy).toBe("185 calories");
  });
});
