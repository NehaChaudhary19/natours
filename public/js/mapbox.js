/* eslint-disable */
export const displayMap = (locations) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmVoYWNoYXVkaGFyeTE5IiwiYSI6ImNraG15OXhjMjJhZTAyeXFxcW9sdXFmbjkifQ.uovldl_n9kzYQ3BoDkyYZw';

    var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nehachaudhary19/ckhn2jlq30gky19qpsrmtq1yc',
    scrollZoom: false
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
    });
    
    const bounds = new mapboxgl.LngLatBounds();
    
    locations.forEach(loc => {
        //Add marker
        const el = document.createElement('div');
        el.className = 'marker';
    
        new mapboxgl.Marker({
            element: el,
            anchor: 'bottom'
        })
        .setLngLat(loc.coordinates)
        .addTo(map);
    
         // Add popup
         new mapboxgl.Popup({
            offset: 30
          })
            .setLngLat(loc.coordinates)
            .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
            .addTo(map);
      
        
         // Extend map bounds to include current location
          bounds.extend(loc.coordinates);
    });
    
    map.fitBounds(bounds , { 
        padding: {
            top: 200,
            bottom: 150,
            left: 100,
            right:100
        }        
    });
};
