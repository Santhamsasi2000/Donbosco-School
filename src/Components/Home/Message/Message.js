import './Message.css';
import { DataMessage } from './DataMessage'

const Message = () => {
  return (
    <section className='p-3 p-sm-5'>
        <p className='title mb-3 mb-md-5'>Messages from the Leadership</p>
       {
        DataMessage.map(({id,image,from,msgTitle,message,regards,name,position})=>(
        <div className='row mb-3'key={id}>
            <div className='col-md-6 mb-3 mb-md-0'>
                <img src={image} alt={name} className='w-100 message-img border border-success border-2'/>
            </div>
            <div className='col-md-6'>
                <p className='fw-bold'>Message From {from} :</p>
                <p>{msgTitle}</p>
                <p>{message}</p>
                <p className='mb-1'>{regards}</p>
                <p className='fw-semibold mb-1'>{name}</p>
                <p className='text-success'>{position}</p>
            </div>
        </div>
        ))
       }
    </section>
  )
}

export default Message
