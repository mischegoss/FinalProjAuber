import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_restaurants extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;

    // The contents of this data sheet will be loaded by plugin 'Firebase (Cloud Firestore)'.
    
    item = {};
    this.items.push(item);
    item['RestaurantPhone'] = "304-222-2000";
    item['document_key'] = "GFNdjMPqAJ0whfdE3Rpu";
    item['RestaurantName'] = "Ally";
    item['RestaurantCoverImage'] = "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTv_UMRgudwqBC6ICoAiTnuUVPhTMzYR01KJeArx70D49O2LQlSX02cChv81IM9g_tBIkmTqrY5YHkY1gszpzTqYG4oGq49Xj-AN_zpv1DXgkdPtyy08nSPEQ&usqp=CAc";
    item.key = key++;
    
    item = {};
    this.items.push(item);
    item['RestaurantPhone'] = "304-222-2000";
    item['document_key'] = "Se5NEZ6PonZ7QHJLdPCW";
    item['RestaurantEmail'] = "restaurant@restaurant.com";
    item['RestaurantName'] = "Name1";
    item['RestaurantCoverImage'] = "https://cdn.shoplightspeed.com/shops/612125/files/5115671/650x750x2/image.jpg";
    item['RestaurantAddress'] = "123Main";
    item.key = key++;
  }

  
  // this function's implementation is provided by React Studio.
  _fetchComplete = (err, options) => {
    if (err) {
      console.log('** Web service write failed: ', err, options);
    } else {
      if (this.updateCb) this.updateCb(this);
    }
  }
  
  
  addItem(item, options) {
    console.log("add to firebase: ", item);
      
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
      
    collection.add(item)
      .then((docRef) => {
        console.log("Firebase document added with id: ", docRef.id);
        item.document_key = docRef.id;
        //super.addItem(item, options);
      
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        this._fetchComplete(error, options);
      });
  }
  
  removeItem(item, options) {
    //super.removeItem(item, options);
    
    console.log("delete from firebase: ", item);
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
    const docRef = collection.doc(item.document_key);
    
    docRef.delete()
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error deleting document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  
  replaceItemByRowIndex(idx, item, options) {
    //super.replaceItemByRowIndex(idx, item, options);
    
    console.log("update in firebase: ", item);
  
    const db = this.firebase.firestore();
    const collection = db.collection(options.servicePath);
    const docRef = collection.doc(item.document_key);
    
    docRef.update(item)
      .then(() => {
        this._fetchComplete(null, options);
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
        this._fetchComplete(error, options);    
      });
  }
  

}
