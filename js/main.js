const panorama1 = new PANOLENS.ImagePanorama( 'images/vibe.jpg' );
const panorama2 = new PANOLENS.ImagePanorama( 'images/cafe.jpg');

var infospotPositions = [
    new THREE.Vector3(1900, 6, -2220.14),
    new THREE.Vector3(1999, 500, -6000.50),
    
]

const infospot1 = new PANOLENS.Infospot(195, PANOLENS.DataImage.Info)
infospot1.position.set(2100, 40, -500.90)
infospot1.addHoverText('You can place your order here. The staffs will assist you.', 40)

const infospot2 = new PANOLENS.Infospot(900, PANOLENS.DataImage.Info)
infospot2.position.set(-7890, 1, -1500)
infospot2.addHoverText('This aisle area has a perfect-looking veranda.', 40)

const infospot3 = new PANOLENS.Infospot(900, PANOLENS.DataImage.Info)
infospot3.position.set(1, 89, 10000.90)
infospot3.addHoverText('Aroma Cafe has 120 seats, perfect for celebrations.', 40)

const infospot4 = new PANOLENS.Infospot(900, PANOLENS.DataImage.Info)
infospot4.position.set(-8015, 60, 1200.90)
infospot4.addHoverText('These are the collection of books from your favorite authors.', 40);


panorama1.add(infospot1, infospot2, infospot3)
panorama2.add(infospot4)














let imageContainer = document.querySelector('.image-container')
const viewer = new PANOLENS.Viewer({
    container: imageContainer,
    autoRotate: true,
    autoRotateSpeed: 0.9,
    controlBar: true

});


panorama1.link( panorama2, infospotPositions[0]);
panorama2.link( panorama1, infospotPositions[1]);


viewer.add( panorama1, panorama2);

