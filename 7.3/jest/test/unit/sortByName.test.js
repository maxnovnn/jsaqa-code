const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it('Books names should be sorted in ascending order', () => {
    expect(
        sorting.sortByName([
            'Понедельник начинается в субботу',
            'Мартин Иден',
            'Понедельник начинается в субботу',
        ]),
    ).toEqual([
        'Мартин Иден',
        'Понедельник начинается в субботу',
        'Понедельник начинается в субботу',
    ]);
  });
});
