# My Widget Gallery for Notion

Welcome to the Widget Gallery for Notion! This repository hosts a collection of interactive widgets designed to enhance your Notion experience. Each widget is self-contained and can be used independently within Notion or any other platform that supports HTML/CSS/JavaScript widgets.

## Features

- **Modular Widgets**: Each widget is stored in its own directory, making it easy to find and use.
- **Gallery Page**: A main gallery page (`index.html`) showcases all available widgets with links to individual widget pages.
- **Responsive Design**: Widgets are designed to be responsive, ensuring they work well on both desktop and mobile platforms.

## Directory Structure

```
.
├── README.md
├── assets  # assets for the project
│   ├── fonts
│   ├── images
│   └── styles
│       ├── goo-style.css
│       └── main.css
├── index.html  # main gallery page
└── link-widget  # link widget
    └── index.html
```

## Getting Started

To view or use the widgets for you own Notion page, simply clone this repository and open `index.html` in your browser and refactor them for your own use:

```
git clone https://github.com/yourusername/yourrepository.git
cd yourrepository
open index.html
```

Alternatively, you can view the widgets live on GitHub Pages at `https://datadudecodes.github.io/yourrepository/`.

## Contributing

Contributions are welcome! If you have a widget you'd like to add, please follow these steps:

1. Fork the repository.
2. Create a new directory under the root for your widget.
3. Develop your widget, ensuring it includes at least `index.html`, `style.css`, and `script.js`.
4. Add a link and a preview image to the main `index.html` gallery page.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to all the contributors who have helped to expand this gallery.
- Special thanks to Notion for inspiring the use of interactive widgets.

```

This README provides a comprehensive guide to your project, making it easy for others to understand, use, and contribute to your widget gallery. Adjust the repository URLs and any specific instructions according to your project's setup.