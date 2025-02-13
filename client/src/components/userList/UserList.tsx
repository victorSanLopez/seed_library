import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { formatDate } from "../../services/dateFormatter";
import type { UserType } from "../../types/user";
import ConfirmationModal from "../modals/ConfirmationModal";
import style from "./userList.module.css";

export default function UserList() {
  const [userData, setUserData] = useState<UserType[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/users/user-list`,
        );
        setUserData(response.data);
      } catch (err) {
        toast.error("Impossible de charger les utilisateurs.");
      }
    };

    fetchData();
  }, []);

  const handleDelete = async () => {
    if (userIdToDelete === null) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/v1/users/${userIdToDelete}`,
      );

      setUserData((previousUserData) =>
        previousUserData.filter((user) => user.id !== userIdToDelete),
      );

      toast.success("Utilisateur supprimé avec succès ! ✊");

      closeModal();
    } catch (error) {
      toast.error("Nous n'avons pas pu supprimer l'utilisateur... 😟");
    }
  };

  const openModal = (userId: number) => {
    setUserIdToDelete(userId);
    setModalOpen(true);
  };
  const closeModal = () => {
    setUserIdToDelete(null);
    setModalOpen(false);
  };

  return (
    <>
      {userData?.map((currentUserData: UserType) => (
        <section className={style.listContainer} key={currentUserData.id}>
          <ul className={style.userList}>
            <li className={style.pseudo}>{currentUserData.username}</li>
            <li className={style.email}>{currentUserData.email}</li>
            <li className={style.date}>
              Inscrit depuis le {formatDate(currentUserData.created_at)}
            </li>
          </ul>
          <button
            type="button"
            className={style.deleteButton}
            onClick={() => openModal(currentUserData.id)}
          >
            Supprimer l'utilisateur ? 🗑️
          </button>
        </section>
      ))}
      <ConfirmationModal
        isOpen={isModalOpen}
        message="Êtes-vous sûr de vouloir supprimer cet utilisateur ?
        Cette action est irréversible. ⚠️"
        onConfirm={handleDelete}
        onCancel={closeModal}
      />
    </>
  );
}
