import './styles/main.css';
import {main} from "./app/app";

document.addEventListener('DOMContentLoaded', () => {
    main();
    document.body.removeAttribute('unresolved');
}, false);
