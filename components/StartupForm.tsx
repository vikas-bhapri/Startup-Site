"use client"

import Form from 'next/form'
import { Input } from './ui/input'
import { useState } from 'react'
import { Textarea } from './ui/textarea'
import MDEditor from '@uiw/react-md-editor'
import { Button } from './ui/button'
import { Send } from 'lucide-react'

const StartupForm = () => {

    const [error, setError] = useState<Record<string, string>> ({})
    const [pitch, setPitch] = useState('')

    const isPending = false
    
  return (
    <Form action={()=>{}} className='startup-form'>
        <div>
            <label htmlFor="title" className='startup-form_label'>Title</label>
            <Input id='title' name='title' className='startup-form_input' required placeholder='Title'/>
            {error.title && <p className='startup-form_error'>{error.title}</p>}
        </div>

        <div>
            <label htmlFor="description" className='startup-form_label'>Description</label>
            <Textarea id='description' name='description' className='startup-form_input' required placeholder='Description'/>
            {error.description && <p className='startup-form_error'>{error.description}</p>}
        </div>

        <div>
            <label htmlFor="category" className='startup-form_label'>Category</label>
            <Input id='category' name='category' className='startup-form_input' required placeholder='Catgory (Tech, Health, Education ...)'/>
            {error.category && <p className='startup-form_error'>{error.category}</p>}
        </div>

        <div>
            <label htmlFor="link" className='startup-form_label'>Image URL</label>
            <Input id='link' name='link' className='startup-form_input' required placeholder='Image URL'/>
            {error.link && <p className='startup-form_error'>{error.link}</p>}
        </div>

        <div data-color-mode='light'>
            <label htmlFor="pitch" className='startup-form_label'>Pitch</label>
            <MDEditor value={pitch} onChange={(value)=> setPitch(value as string)} id='pitch' preview='edit' height={300} style={{borderRadius: 20,border: '3px solid' , overflow: 'hidden'}} textareaProps={{
                placeholder: 'Briefly describe your blog...'
            }} 
            previewOptions={{
                disallowedElements: ['style']
            }}
            />
            
            {error.pitch && <p className='startup-form_error'>{error.pitch}</p>}
        </div>

        <Button type='submit' className='startup-form_btn text-white' disabled={isPending}>
            {isPending ? "Submitting ..." : "Submit"}
            <Send className='size-5 ml-2'/>
        </Button>


    </Form>
  )
}

export default StartupForm