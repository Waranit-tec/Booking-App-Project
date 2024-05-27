import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState,useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import PropertyCard from "../components/PropertyCard";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";
import { ModalContent } from "react-native-modals";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const PlacesScreen = () => {
  const route = useRoute();

  const data = [
    {
      id: "0",
      place: "Khao Yai",
      placeImage:
        "https://mpics.mgronline.com/pics/Images/561000007345201.JPEG",
      shortDescription: "The first National Park in Thailand",
      properties: [
        {
          id: "10",
          name: "Rancho Charnvee Resort and Country Club",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/59259089.jpg?k=2e6dce4614036ea57496ee5b4514df0d678bf054e88f639f464d68719bc81538&o=&hp=1",
          rating: 8.6,
          address:
            "333/2 Moo 12 Khanong Phra, Pak Chong District, Nakhon Ratchasima 30130 ",
          oldPrice: 3900,
          newPrice: 3671,
          latitude: "14.645499866467322",
          longitude: "101.45908726733491",
          photos: [
            {
              id: "100",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/59259089.jpg?k=2e6dce4614036ea57496ee5b4514df0d678bf054e88f639f464d68719bc81538&o=&hp=1",
            },
            {
              id: "101",
              image:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/4b/ca/05/rancho-charnvee-resort.jpg?w=700&h=-1&s=1",
            },
            {
              id: "102",
              image:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/4b/cc/6e/rancho-charnvee-resort.jpg?w=700&h=-1&s=1",
            },
            {
              id: "103",
              image:
                "https://q-xx.bstatic.com/xdata/images/hotel/max500/337595039.jpg?k=5e57feab8c2769c860f593c02e750ca2927abbb907b921b1f581571ca2cbafb4&o=",
            },
            {
              id: "104",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/337256568.jpg?k=603d354fafa2d86d7bd6a374026e6eb269a3f42b289770274aeff254cf9d59af&o=&hp=1",
            },
            {
              id: "105",
              image:
                "https://www.charnveeresortkhaoyai.com/wp-content/uploads/2022/12/2-1-1-1024x682.jpg",
            },
            {
              id: "106",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdfGKd-81TmFbjY579-HsZ5uajReOIWRP1dBJJ1-JPUg&s",
            },
            {
              id: "107",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/337256264.jpg?k=f25ad848bc8cbc7a16fd6ff3da4a9a448eb21db33ab94b7c9ae555d069a9b0cc&o=&hp=1",
            },
            {
              id: "108",
              image:
                "https://www.charnveeresortkhaoyai.com/wp-content/uploads/2020/12/chez1-1024x848.jpg",
            },
            {
              id: "109",
              image:
                "2",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Two bedroom with balcony",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        {
          id: "11",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/421547521.jpg?k=aa2f0c6789c93757a9c717152e37a69b2af0cd4dba6f93b35f8d51ee3f520830&o=&hp=1",
          name: "The Peri Hotel Khao Yai",
          rating: 8.1,
          address:
            " 327-330 Moo 9 ,Kudkla road Phaya Yen, Pak Chong District, Nakhon Ratchasima 30320",
          oldPrice: 3410,
          newPrice: 2387,
          latitude: "14.570438012577565",
          longitude: "101.29700630236002",
          photos: [
            {
              id: "110",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/421547521.jpg?k=aa2f0c6789c93757a9c717152e37a69b2af0cd4dba6f93b35f8d51ee3f520830&o=&hp=1",
            },
            {
              id: "111",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/403902133.jpg?k=42c1f94c0fbda4a6d45415b11a5e3f123e974886179076f6e239372b8d120478&o=&hp=1",
            },
            {
              id: "112",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJc0wCRXb4xikTLW5vfJawLUkjm1EC7oQQWw&s",
            },
            {
              id: "113",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/278159788.jpg?k=a4469bd9c3dc8f44e5983bdb50ba350acffb357290835234b11f40126c4bf736&o=&hp=1",
            },
            {
              id: "114",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3K3morge7bzvPtC8fZFTPVX7qmNUHuwuxQg&s",
            },
            {
              id: "115",
              image:
                "https://www.newbangkokliving.com/wp-content/gallery/the-peri-khao-yai-lobby/20210519_170156.jpg",
            },
            {
              id: "116",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3VsQJxy2I0IxF4rPQsQ__KOggN8SJ8GVfg&s",
            },
            {
              id: "117",
              image:
                "https://amazingcouple.net/wp-content/uploads/2021/11/The-Peri-Hotel-Khao-Yai-4.jpg",
            },
            {
              id: "118",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCkGgQLCs_eMQ6ijrLdVjniYONbcTpE-H4XQ&s",
            },
            {
              id: "119",
              image:
                "https://hello2day.com/wp-content/uploads/2021/04/peri-mountain-lodge-khao-yai-45.jpg",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Two bedroom with balcony",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        {
          id: "12",
          name: "Te Mata Glamping",
          rating: 9.5,
          address:
            "97 Moo 6, Nongnamdang, Parkchong, Nakhon Ratchasima 30130",
          oldPrice: 12540,
          newPrice: 7499,
          latitude: "14.647777879378289",
          longitude: "101.37276190030286",
          image:
            "https://cf.bstatic.com/xdata/images/hotel/max1024x768/530997076.jpg?k=f13dffee168b3f694f375aceda46c6a5d98c0698dd9d79a4e8241127dbefa085&o=&hp=1",
          photos: [
            {
              id: "120",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/530997076.jpg?k=f13dffee168b3f694f375aceda46c6a5d98c0698dd9d79a4e8241127dbefa085&o=&hp=1",
            },
            {
              id: "121",
              image:
                "https://cdn-60325a43c1ac1806501675f8.closte.com/wp-content/uploads/2021/03/360degree-980x683-01-2.jpg",
            },
            {
              id: "122",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/356451194.jpg?k=2fd2f81d3e583ececb90204b683a67cf0de2f2d6281382ea86d23f0964ef91c9&o=&hp=1",
            },
            {
              id: "123",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1024x768/356685324.jpg?k=5c9fce8e5bdb11709d51236064b0c486bbaec2b22490d6489c45e6d0b68afa1a&o=&hp=1",
            },
            {
              id: "124",
              image:
                "https://cdn-60325a43c1ac1806501675f8.closte.com/wp-content/uploads/2021/09/DSC02927-scaled-980x683.jpg",
            },
            {
              id: "125",
              image:
                "https://cdn-60325a43c1ac1806501675f8.closte.com/wp-content/uploads/2021/07/temata-press-gomagazine.jpg",
            },
            {
              id: "126",
              image:
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/d5/8c/e9/te-mata-glamping.jpg?w=700&h=-1&s=1",
            },
            {
              id: "128",
              image:
                "https://cdn-60325a43c1ac1806501675f8.closte.com/wp-content/uploads/2021/10/IMG_5292.jpg",
            },
            {
              id: "129",
              image:
                "https://images.trvl-media.com/lodging/23000000/22420000/22410900/22410897/014e065f.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Two bedroom with balcony",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
      ],
    },
    {
      id: "2",
      place: "Pattaya City",
      placeImage:
        "https://a.cdn-hotels.com/gdcs/production47/d265/82394980-276a-4eb6-bb07-e91d0e9fb88e.jpg",
      shortDescription: "A popular beach on the Gulf of Thailand",
      properties: [
        {
          id: "20",
          name: "FabExpress Airport Stay Inn",
          rating: 3.5,
          address:
            "CFC-4/C, Road No-2 Hardware Park, Beside TCS, Tukkuguda, 501351 Hyderabad, India",
          oldPrice: 4332,
          newPrice: 3200,
          photos: [
            {
              id: "140",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814194.jpg?k=38b97dc9e93b02ce00d14d9625dea692677aec64feea9e9ea76b154f703362a0&o=&hp=1",
            },
            {
              id: "141",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814179.jpg?k=12c76ec416673fc09ae8085250cebd14928b35671e9d72f782da4256c394f610&o=&hp=1",
            },
            {
              id: "142",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814188.jpg?k=530786e8585f567d1dee1e0e7cfdc551063c3c154d3f161d11674ee16f78b4c7&o=&hp=1",
            },
            {
              id: "143",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814184.jpg?k=192eee45d30ae6425619495061c922330745cc1cf57bf65d6da6f9fa481b6f22&o=&hp=1",
            },
            {
              id: "144",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814185.jpg?k=2217db46e371a47298bc3feee62357acda5bf2802f2042ebfa5b35b9cabc85ed&o=&hp=1",
            },
            {
              id: "145",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814187.jpg?k=e752022ae6b6701448156f8b5101b1d7dbf5176f405ce60573ad633a57028efc&o=&hp=1",
            },
            {
              id: "146",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814182.jpg?k=f6129a926e1d863bc29d0dbf0eb6650ddfff6a5ca12b2b967cd7661babe8ca97&o=&hp=1",
            },
            {
              id: "147",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814170.jpg?k=7c51fee51c3b222aff367a41ab640e9cb794ae339e407dfb38bb45f7320dc91e&o=&hp=1",
            },
            {
              id: "148",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814168.jpg?k=270c0b95619412803742ebdcea2c03203f1f26a06ea797ad715a0a0b24fe85fa&o=&hp=1",
            },
            {
              id: "149",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/424814197.jpg?k=ca3eec900001077869d3591221f306025775cca085d91a0bcae3b722484c8b6e&o=&hp=1",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Deluxe king Room",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
        {
          id: "22",
          name: "Olive Service Apartments",
          rating: 4.5,
          address:
            "Plot 73, Shilpi Valley, Gafoor Nagar, Madhapur, Opp Hitech City Mindspace, Hyderabad",
          oldPrice: 5200,
          newPrice: 4100,
          photos: [
            {
              id: "160",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244256022.jpg?k=039b6ea2059809603206e35aa336d9ef97ca8b793327277580ce19001ba3a492&o=&hp=1",
            },
            {
              id: "161",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258918.jpg?k=0e9b069b0719ba5cdbfba03fa7420a8c6096dad9c699c2a1baca3d1f7c80d2f1&o=&hp=1",
            },
            {
              id: "162",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244257685.jpg?k=70dc1dfb4f8f5abde720afc61fcc757d76567f4a293c486206de5fc81119686c&o=&hp=1",
            },
            {
              id: "163",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258924.jpg?k=1f98c00674333999f29ce3b095eece29069f8304bf7697467a405b417132ee5f&o=&hp=1",
            },
            {
              id: "164",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258928.jpg?k=8e03b53ddf32342bdac53e3aa1cb92aae88496e8afa8fbb1f62fa6e8f023ec2c&o=&hp=1",
            },
            {
              id: "165",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258926.jpg?k=8935acba4ff9588ea20674cffd5f309f8862aa6950a1dddc99d79e9afe16cde5&o=&hp=1",
            },
            {
              id: "166",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258921.jpg?k=95be913693f4ec3cbae9e30f525a2b03a6e61d0aa2e2fdb1bf0a6f00362dcbad&o=&hp=1",
            },
            {
              id: "167",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244257008.jpg?k=7e3939fc4b54b7752f476f6f819e12a0054659b0ce4a9d6414c0b2db310e175e&o=&hp=1",
            },
            {
              id: "168",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244257005.jpg?k=7eff1e1de6cec34762fa374c083ff27189acdd8410a1d36f110d099921b6df84&o=&hp=1",
            },
            {
              id: "169",
              image:
                "https://cf.bstatic.com/xdata/images/hotel/max1280x900/244258932.jpg?k=abdca02df16c21de889f9a0790ec6bece09a9fce92550079baa0e1eebf9b8f80&o=&hp=1",
            },
          ],
          rooms: [
            {
              id: "202",
              name: "King Room with Balcony",
              size: 419,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
            {
              id: "203",
              name: "Deluxe king Room",
              size: 440,
              refundable: "non refundable",
              payment: "Pay in advance",
              bed: "1 queen bed",
            },
            {
              id: "205",
              name: "Deluxe king Room",
              size: 490,
              refundable: "refundable",
              payment: "Pay at the property",
              bed: "1 queen bed",
            },
          ],
        },
      ],
    },
  ];
  const navigation = useNavigation();
  const [modalVisibile, setModalVisibile] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  const filters = [
    {
      id: "0",
      filter: "cost:Low to High",
    },
    {
      id: "1",
      filter: "cost:High to Low",
    },
  ];
  const [loading,setLoading] = useState(false);
  const [items,setItems] = useState([]);
  useEffect(() => {
    if (items.length > 0) return;

    setLoading(true);

    const fetchProducts = async () => {
      const colRef = collection(db,"places");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
      setLoading(false);
    };
    fetchProducts();
  }, [items]);
  const searchPlaces = data?.filter((item) => item.place === route.params.place);
  const [sortedData,setSortedData] = useState(items);
  console.log(searchPlaces)

  const compare = (a,b) => {
    if(a.newPrice > b.newPrice){
      return -1;
    }
    if(a.newPrice < b.newPrice){
      return 1;
    }
    return 0;
  }

  const comparision = (a,b) => {
    if(a.newPrice < b.newPrice){
      return -1;
    }
    if(a.newPrice > b.newPrice){
      return 1;
    }
    return 0;
  }

  const applyFilter = (filter) => {
    setModalVisibile(false)
    switch(filter){
      case "cost:High to Low":
        searchPlaces.map((val) => val.properties.sort(compare));
        setSortedData(searchPlaces);
        break;
      case "cost:Low to High":
        searchPlaces.map((val) => val.properties.sort(comparision));
        setSortedData(searchPlaces);
        break;
    }
  }

  console.log(route.params);
 
  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          padding: 12,
          backgroundColor: "white",
        }}
      >
        <Pressable
          onPress={() => setModalVisibile(!modalVisibile)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Sort
          </Text>
        </Pressable>

        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="filter" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Filter
          </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Map",{
          searchResults:searchPlaces,
        })} style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome5 name="map-marker-alt" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Map
          </Text>
        </Pressable>
      </Pressable>

      {loading ? (
        <Text>Fetching places....</Text>
      ) : (
        <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
        {sortedData
          ?.filter((item) => item.place === route.params.place)
          .map((item) =>
            item.properties.map((property, index) => (
              <PropertyCard
                key={index}
                rooms={route.params.rooms}
                children={route.params.children}
                adults={route.params.adults}
                selectedDates={route.params.selectedDates}
                property={property}
                availableRooms={property.rooms}
              />
            ))
          )}
      </ScrollView>
      )}

    

      <BottomModal
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        footer={
          <ModalFooter>
            <Pressable
            onPress={() => applyFilter(selectedFilter)}
              style={{
                paddingRight: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginVertical: 10,
                marginBottom:30
              }}
            >
              <Text>Apply</Text>
            </Pressable>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Sort and Filter" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 280 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginVertical: 10,
                flex: 2,
                height: 280,
                borderRightWidth: 1,
                borderColor: "#E0E0E0",
              }}
            >
              <Text style={{ textAlign: "center" }}>Sort </Text>
            </View>

            <View style={{ flex: 3, margin: 10 }}>
              {filters.map((item, index) => (
                <Pressable
                  onPress={() => setSelectedFilter(item.filter)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                  key={index}
                >
                    {selectedFilter.includes(item.filter) ? (
                        <FontAwesome name="circle" size={18} color="green" />
                    ) : (
                        <Entypo name="circle" size={18} color="black" />
                    )}
                  
                  <Text
                    style={{ fontSize: 16, fontWeight: "500", marginLeft: 6 }}
                  >
                    {item.filter}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default PlacesScreen;

const styles = StyleSheet.create({});
