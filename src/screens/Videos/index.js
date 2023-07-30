import React, { useCallback, useState } from "react";
import { Alert, Button, FlatList, Image, ScrollView, View } from "react-native";
import { height, width } from "../../assects/strings";
import YoutubePlayer from "react-native-youtube-iframe";
import Shorts from "./Shorts";
import { colors } from "../../assects/colors";
import { toneopimages } from "../../assects/Images/Toneop";



function VideosScreen(){
    const [playing, setPlaying] = useState(false);

    const items = [
      {
        id: '001',
        url: 'https://youtube.com/shorts/Ey8cxlzDmEY',
      },
      {
        id: '002',
        url: 'https://youtube.com/shorts/MxGchRpyh_E',
      },
      {
        id: '003',
        url: 'https://youtube.com/shorts/wnJN4oaiGkc',
      },
      {
        id: '004',
        url: 'https://youtube.com/shorts/K7HYbuLt384',
      },
      {
        id: '005',
        url: 'https://youtube.com/shorts/W9FG3QQVFmY',
      },
      {
        id: '006',
        url: 'https://youtube.com/shorts/QpObVpFkPxw',
      },
      {
        id: '007',
        url: 'https://youtube.com/shorts/MWllQJj8AzA',
      },
      {
        id: '008',
        url: 'https://youtube.com/shorts/EXnipFEGs_0',
      },
      {
        id: '009',
        url: 'https://youtube.com/shorts/Py1wyDyQ77c',
      },
      {
        id: '010',
        url: 'https://youtube.com/shorts/cS-W8acsiUg',
      },
      {
        id: '011',
        url: 'https://youtube.com/shorts/5kPONZu5rLM',
      },

      {
        id: '012',
        url: 'https://youtube.com/shorts/v_xMQWbhKV4',
      },
    ];



    const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
          Alert.alert("video has finished playing!");
        }
      }, []);
    
    const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
    }, []);

      

    function RenderVideos({item,index}){

      return(
        <YoutubePlayer
        height={height}
        width={width}
        play={playing}
        videoId={item}
        contentScale={1}
        // playList={}
        initialPlayerParams={{controls:false,}}
        onChangeState={onStateChange}
        webViewProps={{
            injectedJavaScript: `
              var element = document.getElementsByClassName('container')[0];
              element.style.position = 'unset';
              element.style.paddingBottom = 'unset';
              true;
            `,
          }}
    />
      )
    }
    
    return(
        <View style={{flex:1,backgroundColor:'black'}} >
          <View style={{width:width,height:width/7,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:20,backgroundColor:"transparent",position:"absolute",top:0,zIndex:1}} >
            <Image style={{width:width/6,height:width/6}} source={toneopimages?.splash} />

          </View>
          {/* <FlatList 
          maintainVisibleContentPosition={{minIndexForVisible:1}} 
          maxToRenderPerBatch={3} 
           data={youtubeVideosList} 
           renderItem={RenderVideos} 
           pagingEnabled
           /> */}

           <Shorts items={items} />
        </View>
    )
}

export default VideosScreen;