import { StyleSheet , Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
export const styles=  StyleSheet.create({
    back:{
        color:"#5DB075",
        fontSize:16,
        fontWeight:'500',
        padding:10,
    },
    feed:{
        fontSize:30,
        fontWeight:'600',
    },
    backMarket:{
        color:"#ffff",
        fontSize:16,
        fontWeight:'500',
        padding:10,
    },
    feedMarket:{
        fontSize:30,
        fontWeight:'600',
        color:"#ffff",

    },
    containerSearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',  
        alignItems: 'center',             
        margin: 15,
        width: '97%',
      },
    container:{
      flexDirection:"row",
      margin:15,
    },
    imageContainer:{
        backgroundColor:"#F6F6F6",
        width:50,
        height:50,
        marginRight:16,
        borderRadius:8,
    },
    topContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginBottom:8,
      width:'70%',
    },
    title:{
      fontSize:16,
      fontWeight:'600',
      lineHeight:19,
    },
    content:{
      borderBottomWidth: 2, 
      borderBottomColor: '#E8E8E8',
      paddingBottom: 15,
      width:'70%',
    },
    bigImageContainer:{
        borderEndEndRadius:8,
        backgroundColor:"#F6F6F6",
        width:'93%',
        margin:15,
        height:200,
        marginTop:0,
        borderRadius:8,
    },
    contents:{
        paddingBottom: 2,
        fontSize:16,
        width:'97%',
    },
    contentscont:{
        marginLeft:15,
        marginBottom:10,
    },
    time:{
        color:'#BDBDBD',
        fontWeight:'400',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor:"#E8E8E8",
    },
    dotActive: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor:"#5DB075",
    },
    dotcont:{ 
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        flex: 1 , 
        marginRight:10, 
        marginBottom:15},

    background: {
        height: height,
        width: width,   
    },
    text: {
        color: 'white',
    },
    marketCont:{
        paddingTop:25,
        backgroundColor:'#5DB075',
        justifyContent: 'center', 
        alignItems: 'center', 
    },    
    contCont:{
        paddingTop:35,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    img:{
        height:240,
        width:'92%',
        marginBottom:50,
        borderRadius: 20,
    },
    sectionTitle:{
        marginLeft:16,
        fontSize:24,
        fontWeight:'500',
        marginTop:35,
    },collection: {
        width: 120,
        marginRight: 10, 
      },
      block: {
        backgroundColor: '#F6F6F6',
        width: 110, 
        height: 110,
        marginTop: 23,
        borderRadius: 12,
      },
      horizontalList: {
        paddingLeft: 16,
      },
      
    itemPrice:{
        fontWeight:'700',
    },
    searchContainer: {
        position: 'relative',
        width: '93%',
        margin: 15,
      },
      search: {
        backgroundColor: "#F6F6F6",
        padding: 14,
        paddingLeft: 20,
        height: 50,
        borderRadius: 50,
        fontSize: 16,
        fontWeight: '500',
        color: '#BDBDBD',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        width: '100%',
      },
      showButton: {
        position: 'absolute',
        right: 15,
        top: 12, 
      },
      showButtonText: {
        color: '#5DB075',
        fontWeight: '500',
      },
      buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
      },
      greenButton: {
        backgroundColor: '#5DB075', 
        paddingVertical: 15,
        paddingHorizontal: 160,
        borderRadius: 50,
        alignItems: 'center',
        marginTop:'40%',
        justifyContent: 'center',
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: '600',
      },
      secondaryText: {
        color: '#5DB075', 
        fontSize: 16,
        marginTop: 10, 
      },
      messageContainer: {
        padding: 10,
        marginVertical: 20,
        borderRadius: 10,
        maxWidth: '73%',
      },
      sender: {
        alignSelf: 'flex-end',
        backgroundColor: '#5DB075',
        paddingVertical:20,
        paddingHorizontal:25,
        marginRight:15,
      },
      receiver: {
        alignSelf: 'flex-start',
        backgroundColor: '#f0f0f0',
        paddingVertical:20,
        paddingHorizontal:25,
        marginLeft:15,
      },
      senderText: {
        color: '#fff',
      },
      receiverText: {
        color: '#000',
      },
        inputContainer: {

          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '93%',
          margin: 15,
          backgroundColor: '#F6F6F6',
          borderWidth: 1,
          borderColor: '#E8E8E8',
          borderRadius: 50,
          paddingHorizontal: 10, 
          marginTop:'48%',
        },
        sendInput: {
          flex: 1, 
          height: 50,
          fontSize: 16,
          fontWeight: '500',
          color: '#BDBDBD',
        },
        sendButton: {
          backgroundColor: '#5DB075', 
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 50,
          marginLeft: 10,
        },
        sendButtonText: {
          color: '#fff',
          fontSize: 16,
          fontWeight: '600',
        },
    });
