# E-commerce App

This is a sample e-commerce application built with React. It allows users to browse products, add them to a cart, and proceed to checkout. The app also includes features such as navigation, responsive design, and Firebase integration for data storage.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/ZekeScript/e-commerce-dl.git
```

2. Install the dependencies:

```bash
cd e-commerce-app
npm install
```

3. Start the development server:

```bash
npm start
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

# Features

- Landing page
- Product catalog
- Category filtering
- Product details
- Quantity selection for adding to cart
- Persistent cart
- Checkout process
- Purchase order generation
- Stock availability check

# Screenshots

![image](https://github.com/ZekeScript/e-commerce-dl/assets/57415369/f0891cc0-05cb-4e26-b8ec-578a3f8daed2)
![image](https://github.com/ZekeScript/e-commerce-dl/assets/57415369/b5cf6031-7301-4f4c-915c-4e6117a09cde)
![image](https://github.com/ZekeScript/e-commerce-dl/assets/57415369/de43c556-9ae5-482c-b970-21bcc24da43d)
![image](https://github.com/ZekeScript/e-commerce-dl/assets/57415369/3336c891-35ce-45fa-b651-c87ff32c225e)
![image](https://github.com/ZekeScript/e-commerce-dl/assets/57415369/39c3f81c-8392-47e5-a226-767732d0487c)
![image](https://github.com/ZekeScript/e-commerce-dl/assets/57415369/c4a625ef-4fb3-4f64-bb8c-94b6260d35e5)
![image](https://github.com/ZekeScript/e-commerce-dl/assets/57415369/f80c9673-55fc-43d7-8457-7cae4b8eb394)


# Tech Stack

**Client**: React, Bootstrap

**Dependencies**: fontawesome, aos, bootstrap, firebase, react, react-icons, react-router-dom, react-toastify

**Server**: Firebase

## Project Structure

The project follows a modular structure with separate components and pages. Here's an overview of the main directories and files:

- `src/App.js`: The main entry point of the application. It sets up the routing and renders the different components based on the current URL.
- `src/layouts/Navbar`: Contains the Navbar component that provides navigation links and a shopping cart widget.
- `src/layouts/BrandPresentation`: Contains the BrandPresentation component that displays the brand logo and a brief introduction.
- `src/layouts/Footer`: Contains the Footer component that displays the footer content.
- `src/pages/Home`: Contains the Home component that represents the home page of the application.
- `src/pages/AboutUs`: Contains the QuienesSomos component that represents the "About Us" page.
- `src/pages/Products`: Contains the Products component that represents the products page. It includes navigation links for different product categories.
- `src/pages/Faqs`: Contains the Faqs component that represents the frequently asked questions page.
- `src/components`: Contains reusable components used across different pages, such as ItemDetailContainer, Cart, CartItem, CartWidget, Checkout, Item, ItemDetail, ItemList, ItemQuantitySelector, etc.
- `src/context/CartContext`: Contains the CartContextProvider component that sets up the context for managing the shopping cart state.
- `src/services/firebase.js`: Contains the Firebase configuration and initializes the Firebase app.

## Dependencies

The project utilizes the following dependencies:

- `react`: JavaScript library for building user interfaces.
- `react-router-dom`: Routing library for React applications.
- `firebase`: Firebase SDK for accessing Firebase services.
- `react-toastify`: Library for displaying toast notifications.

## Learning Experience

- This project served as my introduction to React, and I had to familiarize myself with various concepts and libraries along the way. I spent many hours reading the documentation to develop each new feature.

- One of the biggest challenges I faced was integrating Firebase as a Backend-as-a-Service. It was an entirely new experience for me, and I had to invest time in understanding how to work with it effectively. Fortunately, I managed to overcome the obstacles and make the necessary integrations.

## Author

- [@ZekeScript](https://github.com/ZekeScript)

## Feedback

If you have any feedback, please feel free to contact me at estiga27@gmail.com

## Credits

- [Sebastian Zuviria](https://github.com/sebazio)

## License

[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.
