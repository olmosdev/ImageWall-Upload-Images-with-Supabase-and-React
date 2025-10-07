# ImageWall Upload Images with Supabase and React

A small program for loading and deleting images from a small FrontEnd.

Project based on the following tutorial: [Build An Image Gallery With Supabase Storage and React (Upload Images with Supabase) - YouTube](https://youtu.be/8tfdY0Sf2rA?si=LEvQU00mrhlx0hny)

Note: You just need to create a bucket called “images” in Supabase. In policies, you should only give access to authenticated users. The option should be something like “Give user access to only their own top-level folder named as uid” and allow CRUD operations.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
