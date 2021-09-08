function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 25.763524181664266, lng: 84.15191613635027},
        zoom: 15,
        mapId: '63efc0b7dc2e06df',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
      });
      const marker=new google.maps.Marker({
        position: {lat: 25.763524181664266, lng: 84.15191613635027},
        map,
        title: "FTS (Failure to Sucess)",
        icon: {
          url: "/Images/FTS_LoGO.png",
          scaledSize: new google.maps.Size(50, 40)
        },
        animation: google.maps.Animation.DROP
        
      });
      const infowindow = new google.maps.InfoWindow({
        content: "Non-profit Organization Management",
      });
      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });
      //26.206908520069405, 80.51501820071168
      new google.maps.Marker({
        position: {lat: 26.206908520069405, lng: 80.51501820071168},
        map,
        title: "Akhilesh House",
        icon: {
          url: "/Images/akhil_home.png",
          scaledSize: new google.maps.Size(60, 50)
        },
        animation: google.maps.Animation.DROP
      });
      //25.609995912414032, 83.56430570374427
      new google.maps.Marker({
        position: {lat: 25.609995912414032, lng: 83.56430570374427},
        map,
        title: "Gazipur",
        icon: {
          url: "/Images/city.png",
          scaledSize: new google.maps.Size(60, 50)
        },
        animation: google.maps.Animation.DROP
      });
      //25.72381256535376, 84.21442857535904
      new google.maps.Marker({
        position: {lat: 25.72381256535376, lng: 84.21442857535904},
        map,
        title: "Ganga river",
        icon: {
          url: "/Images/river.png",
          scaledSize: new google.maps.Size(60, 50)
        },
        animation: google.maps.Animation.DROP
      });
}
//25.763524181664266, 84.15191613635027