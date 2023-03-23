# todo-web-jest-swc

## Reason

I decided to create this app to practice Unit Tests fundamentals. Todo App, I can tests several operations such as: create, update and remove. Then, to check if it works or not.

This time, I setup the environment test with Jest + SWC.

You can see a demo here: https://comforting-starburst-d8891b.netlify.app/

## About the project
This project was created with @vitejs/plugin-react-swc template. According to the vite's documentation, replaces Babel with SWC during development. During builds, SWC+esbuild are used when using plugins, and esbuild only otherwise. For big projects that don't require non-standard React extensions, cold start and Hot Module Replacement (HMR) can be significantly faster.

You can check <a target="_blank" href="https://main.vitejs.dev/plugins/#vitejs-plugin-react-swc">here</a>

### State Management

As I was practing unit tests, I took oportunity and choose Zustand to manage state to see how it works.

### 🧪 Unit Tests

#### CreateTodo Component

- should create a new todo
- should not be able to create a new todo if input is empty

#### TodoItem Component

- should be able to mark todo as done
- should show undo button if it is marked as done
- should be able to undo a task as done
- should be able to delete a todo

### Libraries used in project

- zustand
- phosphor icons
- stitches
- jest
- react testing library
- swc

This project is hosted: Netlify
