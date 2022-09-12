import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyled } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { NewTransactionsModal } from "./components/NewTransactionsModal";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionsModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyled />
    </>
  );
}
