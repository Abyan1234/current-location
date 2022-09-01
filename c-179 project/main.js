let lattitude=22.7868542, longitude=88.3643296
mapboxgl.accessToken='pk.eyJ1IjoidHJpcHRpLWtvY2hoYXIiLCJhIjoiY2w0ZmttY3RoMDQ5aDNjbWIweDU2MDZlaSJ9.sPnmeA9j8JWEVW7riiIN-g'
var map=new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,lattitude],
    zoom:16
})

var img1=document.querySelector("london")
var marker1=new mapboxgl.Marker({
    element:img1
})
.setLngLat{[-0.08765,51.50798]}
.addTo(map);

map.addControl(
    new MapboxGeocoder({
        accessToken:mapboxgl.accessToken,
        mapboxgl:mapboxgl

    })
)

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{enableHighAccuracy:true},
        trackuserlocation:true
    })
)
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    'top-left'
)


