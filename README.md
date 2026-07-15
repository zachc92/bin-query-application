# Sample BIN Query Dashboard

This sample application is a panel designed to work with the Worldpay Express EnhancedBINQuery endpoint to allow the user to do a BIN lookup on provided card data. This BIN lookup will provide you with information on what type of card was provided, and the application will also tell you if the card can be surcharged. This application is only meant to be used with the certification endpoint and test card data.

## Security & PCI-DSS Compliance Notes

**Development Environment Notice:** This application passes a full 16-digit card string from the frontend client through the Express server memory. This is done exclusively to demonstrate raw, end-to-end XML payload structure and schema compliance for the **Worldpay Express Certification Sandbox environment**. 

**Production Implementation Vector:** Because this architecture processes raw Primary Account Numbers (PAN), deploying this exact codebase into a live production environment would pull the entire application stack into strict **PCI-DSS scope**, requiring heavy security audits. 

## Tech Stack

*   **React Frontend Client:** [React](https://react.dev/)
*   **Backend Framework:** [Express](https://expressjs.com/) (v5.2.1)
*   **Runtime Engine:** [Node.js](https://nodejs.org) (ES Modules configuration)

## Technical Competency Focus

*   **Lifting State Up (React Architecture):** Form inputs and dashboard data displays are separated into independent components. State memory is lifted to their common parent container (`App.jsx`), establishing a single source of truth and enforcing strict unidirectional data flows.
*   **Separation of Concerns (Backend Architecture):** Controller functions are strictly decoupled from internet transmission code. Express routers manage endpoint visibility, controllers handle validation and parsing, and a dedicated backend service module (`binQuery.js`) handles outbound Axios XML data compilation.
*   **Zero-Dependency Credentials Shielding:** The server leverages native Node.js runtime environment variable parsing (`node --env-file`), ensuring sensitive account keys are injected straight into machine memory and permanently kept out of Git version logs.

## Requirements

### Prerequisites

You will need the following installed on your machine:
*   [Node.js](https://nodejs.org) (v20.6.0+ required for native `--env-file` flags)
*   NPM (Node Package Manager)


1. Clone the Repository and Install Dependencies
```bash
git clone https://github.com/zachc92/bin-query-application
cd bin-query-appplication
npm install
```

2. Environment Configuration

Navigate to the `server/` directory and create your secure runtime environment variable file:

```bash
cd server
touch .env
```

The project's environment variables include the following:
```bash
# Server Configuration
PORT=port

# Account Credentials
ACCEPTOR_ID=your_sandbox_acceptor_id
ACCOUNT_ID=your_sandbox_account_id
ACCOUNT_TOKEN=your_sandbox_account_token
APPLICATION_ID=your_sandbox_application_id
```

Worldpay Express credentials can be generated here: https://docs.worldpay.com/apis/express

3. Run the Development Server

This application requires the use of a React application and an Express server. Within the root of the directory, run the following terminal command to run both the React app and the Express server:

```bash
npm run concurrently \"npm start --prefix server\" \"npm run dev --prefix client\"
```