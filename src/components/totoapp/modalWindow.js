import Modal from 'react-modal';
import style from 'styles/Modalwindow.module.css';

Modal.setAppElement('#root');

const Modalwindow = ({
  modalIsOpen = false,
  setIsOpen = () => undefined,
  setTodoData = () => undefined,
}) => {
  const closeModal = () => setIsOpen(false);
  const clearData = () => {
    setTodoData([]);
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className={style.modal__container}
      overlayClassName={style.Overlay}
    >
      <p className="font-bold mb-4">すべてのボードを削除しますか？</p>
      <div className="flex gap-4 justify-center">
        <button
          className="w-24 border-2 border-red-500 hover:border-transparent hover:bg-red-500 text-red-500 hover:text-gray-100 transition-colors font-bold py-2 px-4 rounded"
          onClick={clearData}
        >
          はい
        </button>
        <button
          className="w-24 border-2 border-gray-500 hover:border-transparent hover:bg-gray-500 text-gray-500 hover:text-gray-100 transition-colors font-bold py-2 px-4 rounded"
          onClick={closeModal}
        >
          もどる
        </button>
      </div>
    </Modal>
  );
};

export default Modalwindow;
