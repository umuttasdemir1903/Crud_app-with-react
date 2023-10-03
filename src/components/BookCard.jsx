import { useState } from "react";
import { DELETE_TYPE, EDIT_TYPE, READ_TYPE } from "./ButtonTypes";
import CustomButton from "./CustomButton";
const BookCard = ({ bookInfo, deleteClick, readUpdateClick, handleEdit }) => {
  const [editMode, setEditMode] = useState(false);
  // console.log(editMode);


  return (
    //En Dış Kapsayıcı
    <div className="d-flex justify-content-between align-items-center border p-3 shadow mt-3 rounded-3 bg-light">
      {/*Sol Taraf (İsim ve Tarih Bilgisi)*/}

      <div>
        {/*Düzenleme modundayken inputu göster değilse başlığı göster */}
        {editMode ?
        <form className="d-flex gap-2" 
        onSubmit={(e) => {
          e.preventDefault();

          //* kitaplar dizisini gğnceller
          handleEdit(bookInfo,e.target[0].value)
          //* düzenleme modunu kapat
          setEditMode(false);
        }}>
          <input className="form-control shadow" defaultValue={bookInfo.bookTitle}/> 
          <button className="btn btn-success shadow">Save</button>
          </form>  
          :   <h5
          style={{
            textDecoration: bookInfo.isRead ? "line-through" : "none",
          }}
        >
          {bookInfo.bookTitle} 
        </h5>}
      
        <p>{bookInfo.date}</p>
      </div>
      {/*Sol Taraf (İsim ve Tarih Bilgisi)*/}

      {/*Sağ Taraf (Butonların Bulunduğu Alan)*/}

      <div className="btn-group gap-2 text-white">
        <CustomButton
          title={"Delete"}
          type={DELETE_TYPE}
          onClick={deleteClick}
        />
        <CustomButton
          title={editMode ? 'Cancel' : 'Edit'}
          type={EDIT_TYPE}
          onClick={() => setEditMode(!editMode)}
        />
        <CustomButton
          title={bookInfo.isRead === false ? "Not read" : "Read"}
          type={READ_TYPE}
          onClick={readUpdateClick}
        />
      </div>

      {/*Sağ Taraf (Butonların Bulunduğu Alan)*/}
    </div>
  );
};

export default BookCard;
