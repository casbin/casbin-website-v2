import React from 'react';
function Editor() {
    return (
        <iframe
            src="https://casbin.org/casbin-editor/"
            style={{ width: '100%', height: '100vh', display: 'block' }}
            title="Casbin-editor"
            allowFullScreen={true} />
    );
}

export default Editor;
