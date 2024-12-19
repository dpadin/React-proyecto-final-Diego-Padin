import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

toast.error ("Error")

const ToastNotifications  = () => {
  

  
    return (
    <div>
        <h2>estamos en el terreno del retunrn   </h2>

      <button onClick={notify}>Make me a toast</button>

      <Toaster />
    </div>
  );
};


export default ToastNotifications 
