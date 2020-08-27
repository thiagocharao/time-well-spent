import React from 'react';

function importAll(r) {
    return r.keys().map(r);
}

const listOfImages = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

class Gallery extends React.Component {

    importAll(r) {
        return r.keys().map(r);
    }

    render() {

        return (
            <div>
                {
                    listOfImages.map(
                        (image, index) => <img key={index} src={image} alt="info"></img>
                    )
                }
            </div>
        )
    }
}
export default Gallery;