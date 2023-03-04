import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Alert from '@mui/material/Alert';


function App() {
  const [markdown, setMarkdown] = useState('# markdown preview')
  const [open, setOpen] =   useState(false);

  const handleClick = (e) => {
    navigator.clipboard.writeText(e)
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Button style={{ margin: "10px 65px" }} className="btn" onClick={() => handleClick(markdown)}>Copy Text
        <ContentCopyIcon />
      </Button>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          copied to Clipboard!!
        </Alert>
      </Snackbar>
      <section className='markdown'>
        <textarea className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        />
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </>
  );
}

export default App;
