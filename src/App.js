import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import JSZip from 'jszip';
import {saveAs} from 'file-saver';

class App extends Component {

    process = (files) => {
        const [file] = files;
        const zip = new JSZip();

        zip
            .folder('ReportResults-Mar 31 2017 12_17 PM')
            .folder('ReportResults-foo-Mar 31 2017 12_17 PM')
            .file('formEntry-1.xlsx', file);

        zip.generateAsync({ type: "blob" }).then(zipFile => {
            saveAs(zipFile, 'ReportResults-Mar 31 2017 12_17 PM.zip');
        });
    };

    render() {
        return (
            <div className="App">
                <Dropzone onDrop={this.process} />
            </div>
        );
    }
}

export default App;
