export const barcodeInitialize = () => {
    if (!('BarcodeDetector' in window)) {
        window.alert('Barcode Detector is not supported by this browser.');
    } else {
        window.alert('Barcode Detector supported!');
        var barcodeDetector = new window.BarcodeDetector({ formats: ['code_128', 'aztec'] });
        window.BarcodeDetector.getSupportedFormats()
            .then(supportedFormats => {
                supportedFormats.forEach(format => window.alert(format));
            });
    }
}