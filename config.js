var config = {
    style: 'mapbox://styles/belliru/cmdgj09n9002501r1cu8ucr61',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiYmVsbGlydSIsImEiOiJjbWRlZXJvbTMwMWo0MmlzZDA4c2VkcHBtIn0.Et0942syCDGUNj8W2fC9UQ',
    showMarkers: true,
    markerColor: '#B8860B',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Ruta Comercial Fenicia',
    subtitle: 'Un viaje por los puertos clave del Mediterráneo oriental y occidental',
    byline: 'Juan J Bellido Ruiz',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'capitulo-tiro',
            alignment: 'left',
            hidden: false,
            title: 'Tiro (actual Líbano)',
            image: 'https://content-historia.nationalgeographic.com.es/medio/2019/12/12/02-bilblos-puerto-comercial-fenicios_df160146_1280x720.jpg',
            description: 'Tiro fue uno de los principales centros comerciales y marítimos del mundo antiguo. Esta ciudad fenicia destacó por su produccion de púrpura y su avanzada técnica naval. Desde sus muelles partían expediciones que conectaban el Mediterraneo oriental con Occidente.',
            location: {
                center: [35.1937, 33.2736],
                zoom: 11.5,
                pitch: 60,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'capitulo-cartago',
            alignment: 'right',
            hidden: false,
            title: 'Cartago (actual Túnez)',
            image: 'https://abcblogs.abc.es/cronicas-nomada/wp-content/uploads/sites/211/2016/05/Recreacion-web.jpg',
            description: 'Fundada por colonos de Tiro, Cartago se convirtió en una metrópoli poderosa con un extenso imperio marítimo. Su puerto doble (comercial y militar) era una muestra de su poderío. Desde aquí se organizaban rutas hacia Iberia, Cerdeña e incluso más allá.',
            location: {
                center: [10.3365, 36.8571],
                zoom: 11.5,
                pitch: 60,
                bearing: -20,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'capitulo-ibiza',
            alignment: 'left',
            hidden: false,
            title: 'Ibiza (Islas Baleares, España)',
            image: 'https://www.voyaibiza.es/img/fenicios04.jpg',
            description: 'Conocida por los fenicios como Iboshim, fue un enclave estratégico para el control de las rutas marítimas entre oriente y occidente. La isla servía de punto intermedio para el comercio de minerales, sal y tejidos entre África del Norte y la península Ibérica.',
            location: {
                center: [1.4288, 38.9122],
                zoom: 11.5,
                pitch: 60,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'capitulo-malaga',
            alignment: 'right',
            hidden: false,
            title: 'Málaga (Andalucia, España)',
            image: 'https://static.grupojoly.com/clip/4c1c1346-9ca3-4c4f-86be-286b76660e33_source-aspect-ratio_1600w_0.jpg',
            description: 'La antigua Malaka fue un importante asentamiento fenicio en el sur de la península. Su ubicación y riqueza natural facilitaron el comercio de productos agrícolas, pescado salado y tejidos. Málaga servía también como centro de redistribución hacia el interior.',
            location: {
                center: [-4.4197, 36.7156],
                zoom: 11.5,
                pitch: 60,
                bearing: -20,
                },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [] 
        },
        {
            id: 'capitulo-cadiz',
            alignment: 'left',
            hidden: false,
            title: 'Cádiz (Andalucia, España)',
            image: 'https://storage.ning.com/topology/rest/1.0/file/get/9521541690?profile=RESIZE_710x',
            description: 'Gadir, una de las colonias fenicias más antiguas de Occidente, fue un punto clave en la red comercial fenicia. Su situación geográfica en el extremo sur de Hispania permitía acceso a los ricos yacimientos minerales de Tartessos y a rutas atlánticas.',
            location: {
                center: [-6.2967, 36.5292],
                zoom: 11.5,
                pitch: 60,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
