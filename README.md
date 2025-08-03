📄 #Insurance Dynamic Form Engine

This application is designed as a dynamic and reusable form engine driven entirely by JSON schemas. It allows the creation of highly customizable multi-step forms that can adapt to any company’s requirements without the need to modify any core logic or UI components.

Built with Next.js (App Router) and styled using Tailwind CSS, the solution ensures scalability, maintainability, and easy customization. All form configurations fields, step structure, styling, and branding are defined in a single JSON file, enabling fast integration and seamless updates with just few minustes rather than build every thing from scratch again or make any copies.

💡 #The Challenge

Insurance companies often need multi-step forms to collect complex information from users. These requirements can vary significantly between companies, and over time, forms need to evolve often with A/B testing to measure performance.

✅ #My Solution

I developed a flexible form generation engine that is hieghly readable for anyone that can:

- Dynamically render form steps and fields based on a JSON schema.

- Apply unique branding and styling per company from the same schema.

- Support A/B testing by allowing multiple schema variants.

- No changes are required in the form logic or components. Just add new JSON and the system takes care of rendering and behavior.

- Any form schema will use the same api in the end.

🔥 #Key Advantages

- Full Branding Customization
Apply colors, fonts, logos, and layout styles through the JSON configuration.

- Flexible Step and Field Control
Define unlimited steps and fields, with support for conditional visibility, validation, and field types.

- A/B Testing Support
Test different versions of a form with variant schemas to optimize conversions and user experience.

- Rapid Deployment for New Clients
Generate complete, multi-step forms in minutes by providing one JSON file per company—no development time required.

🚀 Why This Matters

This architecture enables product and development teams to move faster. Marketers, designers, and product owners can shape new form by updating JSON and then developers to focus on higher-level logic and platform improvements.

It’s a robust foundation for building a white-label, dynamic form system suited for any company in the insurance.

💡 #Future Inhancement 

- I was thinking about how can we make this process more flexible and allow to anyone without any development background to create any form, my idea as below :

- First, we need to create standard template JSON file with clear guidelines that allow anyone to fill it.

- Create a UI page that contains JSON template and space to upload the filled JSON file that contains customer customizations.

- allow the user to download this template on PC to fill it and upload it again.

- Submit the JSON schema action will create a new form with A/B testing for new company with branding and full details then save them in the backend.

- No need for any intervention from the development team.
