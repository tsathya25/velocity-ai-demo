# Velocity AI Systems

AI-powered lead capture and automation demo for local service businesses.

## Overview

Velocity AI Systems is a static web demo that shows how an AI assistant could help local service businesses respond to customer messages, answer common questions, collect lead information, and prepare appointment-ready follow-ups.

The current demo is built around a mock Instagram DM assistant for a detailing business. It is designed as a front-end proof of concept, not a production backend integration.

## Features

- Responsive landing page
- Mock Instagram DM assistant interface
- Quick-reply demo buttons for pricing, ceramic coating, and booking questions
- Basic lead capture summary for name, phone number, service interest, and preferred time
- Single-page static deployment through `index.html`
- GitHub Pages compatible structure

## Demo Use Case

This project is aimed at appointment-based local businesses such as:

- Auto detailing shops
- Window tint and wrap shops
- Gyms and personal trainers
- Barbers and salons
- Med spas
- Other service businesses that rely on fast lead response

## Project Structure

```bash
/
├── index.html     # Main landing page and interactive demo
└── README.md      # Project documentation
```

## Live Demo

The demo currently runs directly from:

```bash
index.html
```

After GitHub Pages is enabled, the live site can be linked here.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## Current Limitations

This is a front-end demo only. It does not currently include:

- Real Instagram DM integration
- Backend API storage
- CRM integration
- Authentication
- Database support
- Real AI model calls

The current assistant logic is rule-based JavaScript meant to demonstrate the customer flow.

## Setup

Clone the repository:

```bash
git clone https://github.com/tsathya25/velocity-ai-demo.git
```

Open the project folder and launch:

```bash
index.html
```

No build step or package installation is required.

## Future Plans

- Add a backend API
- Connect real AI model responses
- Add CRM or Google Sheets lead export
- Add authentication for business owners
- Add deployment documentation
- Add screenshots and a live GitHub Pages link

## License

This project is currently for demonstration and development purposes.
