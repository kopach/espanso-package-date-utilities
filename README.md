# Date utils

[Espanso](https://espanso.org) package to easy get dates like: today, yesterday, last friday, 1-st day of last month, etc.

⭐️ Consider to star this package on [GitHub](https://github.com/kopach/espanso-package-date-utilities/stargazers) — it helps!

[✨ 👉 Check out my other espanso packages 👈 ✨](https://github.com/kopach?tab=repositories&q=espanso-package&type=source)

<h1 align="center">

![demo](./assets/demo.gif)

</h1>

## Installation

> ⚠️ To use this package, make sure you have installed
>
> 1. [Espanso](https://espanso.org/install)
> 2. [Node](https://nodejs.org)

### Either install with `espanso install` (wating for https://github.com/federico-terzi/espanso-hub/issues/59)

```sh
espanso install date-utilities
espanso restart
```

### Or using `git`

```sh
cd "$(espanso path config)/user"
git clone https://github.com/kopach/espanso-package-date-utilities.git
espanso restart
```

That's all. You can start using the package.

## Triggers

| Keyword | Description                 |
| ------- | --------------------------- |
| `:d0`   | Today                       |
| `:d1`   | Tomorrow                    |
| `:d2`   | Day after tomorrow          |
| `:d3`   | Three days from now         |
| `:d4`   | Four days from now          |
| `:d5`   | Five days from now          |
| `:d6`   | Six days from now           |
| `:d7`   | Week from now               |
| `:d-1`  | Yesterday                   |
| `:d-2`  | Day before yesterday        |
| `:d-3`  | Three days ago              |
| `:d-4`  | Four days ago               |
| `:d-5`  | Five days ago               |
| `:d-6`  | Six days ago                |
| `:d-7`  | Week ago                    |
| `:lsu`  | Last sunday                 |
| `:lmo`  | Last monday                 |
| `:ltu`  | Last tuesday                |
| `:lwe`  | Last wednesday              |
| `:lth`  | Last thursday               |
| `:lfr`  | Last friday                 |
| `:lsa`  | Last saturday               |
| `:nsu`  | Next sunday                 |
| `:nmo`  | Next monday                 |
| `:ntu`  | Next tuesday                |
| `:nwe`  | Next wednesday              |
| `:nth`  | Next thursday               |
| `:nfr`  | Next friday                 |
| `:nsa`  | Next saturday               |
| `:1dtm` | First day of this month     |
| `:ldtm` | Last day of this month      |
| `:1dnm` | First day of next month     |
| `:ldnm` | Last day of next month      |
| `:1dpm` | First day of previous month |
| `:ldpm` | Last day of previous month  |

## Contribute

Please, feel free to contribute to this package on [GitHub](https://github.com/kopach/espanso-package-date-utilities)

## Credits

Inspired by [Past and Future Dates](https://app.textexpander.com/group/2752BAC8-F54E-4E3E-8438-483542495069/snippets) for [Text Expander](https://textexpander.com) app

## 📄 License

This espanso package licensed under the [MIT](https://github.com/kopach/espanso-package-date-utilities/blob/master/LICENSE)
