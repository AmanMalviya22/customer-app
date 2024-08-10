# Customer Details SPA

This is a single-page application (SPA) built with React and TypeScript that displays a list of customers. Upon selecting a customer, the details of the selected customer, along with a grid of images fetched from an external API, are displayed. The images change every 10 seconds automatically.

## Features

- **Customer List:** Displays a list of customers with brief descriptions.
- **Customer Details:** Shows detailed information of the selected customer.
- **Image Grid:** Fetches and displays images from an external API. The images refresh every 10 seconds.
- **Highlighting:** The selected customer is highlighted in grey, while others are white.
- **Responsive Design:** The application is responsive and works well on various screen sizes.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **CSS**: Styling of components.
- **Unsplash API**: External API for fetching random images.

## Project Structure

```plaintext
├── public
│   ├── index.html
├── src
│   ├── components
│   │   ├── CustomerDetails.tsx
│   │   ├── CustomerList.tsx
│   │   ├── ImageGrid.tsx
│   ├── styles
│   │   ├── App.css
│   │   ├── Customer.css
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── setupTests.ts
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock

```

### Getting Started
 ## Prerequisites
- **Node**: Ensure you have Node.js installed on your machine.
- **npm**: Use npm (Node Package Manager) or yarn to manage dependencies.


### Installation
```plaintext
1. Clone the repository:
   git clone https://github.com/AmanMalviya22/customer-app.git
   cd customer-app


2. Install dependencies:
npm install or yarn install

3. Set up environment variables:
  Create a .env file in the root directory and add your Unsplash API key:
  REACT_APP_UNSPLASH_ACCESS_KEY=your_unsplash_access_key

###  Running the App
 1. Start the development server:
  npm start

2.Open your browser and go to http://localhost:3000.

### Building for Production
To create an optimized production build:
npm run build
# or
yarn build
This will generate the production build in the build directory.

```

### Deployment

```plaintext
This application can be easily deployed on Netlify. Follow these steps:

1.Create a new site on Netlify.

2.Connect your GitHub repository to Netlify.

3.Set the build command to npm run build and the publish directory to build.

4.Deploy the site.

For detailed instructions, refer to the section How to Deploy on Netlify.

```

### Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your changes.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
1.Unsplash API for providing free access to high-quality images.

2.Netlify for seamless deployment and hosting.





