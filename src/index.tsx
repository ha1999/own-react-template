import React from "react";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { createRoot } from 'react-dom/client';

const App = () => <>
   <AcUnitIcon />
</>

const container = document.getElementById('root');
if (!container) 
  throw new Error('Failed to find the root element');
const root = createRoot(container);
root.render(<App />);