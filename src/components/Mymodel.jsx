import { Button } from "@heroui/button";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@heroui/modal";
import MyForm from "./MyForm";

  
  export default function MyModel() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
  
    return (
        
      <div className="mx-auto w-[10%]">
        <Button className="bg-orange-500 text-white" onPress={onOpen}>Add Product</Button>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 mx-auto text-xl">Add Car Details</ModalHeader>
                <ModalBody>
                  <MyForm/>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>

                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    );
  }
  