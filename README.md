# Demo: create-react-app with Font Awesome Pro using Dynamic Icon Importing

## Run It

1. `export FONTAWESOME_NPM_AUTH_TOKEN=ABC123`

    Since this project relies on Font Awesome Pro icons, you must set this environment
    variable equal to the value of your real Font Awesome Pro NPM Token, which you
    can get from the [Account](https://fontawesome.com/account) page when you're
    logged in at `fontawesome.com`.

1. `npm install`
1. `npm run start`

## Explanation

This repo demonstrates a simple React application that bundles only those
Font Awesome Pro icons actually used, while allowing them to be rendered
dynamically in response to user input.

The `icons.js` module uses the [Dynamic Icon Importing](https://fontawesome.com/v6/docs/web/use-with/react/add-icons#dynamic-icon-importing) feature to include a
specific list of icons, as specified using the `icon()` macro.

It then builds an `ICON_LOOKUP` object that can be used to look up any of those
icons made available by the `icons.js` module.

The main app lists those availble icons, with each `prefix` and `iconName`.

The user can type a prefix and iconName into an input text field, separated by a
space. If there's an icon available that matches the value in the input field,
that icon is displayed accordingly. Otherwise, some default icon is displayed.

Read more about using the `FontAwesomeIcon` React component [here](https://fontawesome.com/v6/docs/web/use-with/react/).

### Change Available Icons

The project includes only the Duotone Solid (`@fortawesome/pro-duotone-svg-icons`)
and Classic Solid (`@fortawesome/pro-solid-svg-icons`) icons.

To add another icon within _one of those styles_, just add another `icon()` to
the list in `icons.js`:

```javascript
const icons = {
  defaultIcon: icon({ name: 'star' }),
  availableIcons: [
    icon({ name: 'avocado', style: 'solid' }),
    icon({ name: 'rocket', family: 'duotone', style: 'solid' }),
    icon({ name: 'bomb' }),
    icon({ name: 'ghost' }),
    icon({ name: 'brush', family: 'duotone', style: 'solid' }),

    // Adding the fire icon below. Classic Solid is the default familyStyle. 

    icon({ name: 'fire' })
  ]
}
```

### Add a new familyStyle

The `icon()` macro can magically pull icons out of the appropriate icon package,
just by adding another `icon()` to that last. However, you first have to manually
make that additional icon package availble in your project.

Let's add the fire icon in the Classic Light familyStyle:

1. `npm install @fortawesome/pro-light-svg-icons`
1. Now update the `availableIcons` list in `icons.js`:

```javascript
const icons = {
  defaultIcon: icon({ name: 'star' }),
  availableIcons: [
    icon({ name: 'avocado', style: 'solid' }),
    icon({ name: 'rocket', family: 'duotone', style: 'solid' }),
    icon({ name: 'bomb' }),
    icon({ name: 'ghost' }),
    icon({ name: 'brush', family: 'duotone', style: 'solid' }),

    // Adding the fire icon in Classic Light. Classic is the default family. 

    icon({ name: 'fire', style: 'light' })
  ]
}
```
