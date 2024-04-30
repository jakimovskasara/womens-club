import { Button } from '@/components/ui/button'
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


const BlogHomepage = () => {
    return (
        <>
            <div className='events'>
                <p className='font-bold mt-5 mb-2 flex justify-center align-center'>Blogs</p>
                <p>
                    <div className='inline flex flex row justify-items-center' >
                        <Card className='flex-1 h-24rem mr-4 ml-4'>
                            <CardHeader>
                                <img src="/blogs/blog-1.jpg" style={{ height: '150px' }} />
                                <CardTitle>Navigating Social Events During Pregnancy: A Guide to Enjoying Gatherings</CardTitle>
                            </CardHeader>
                        
                        </Card >
                        <Card className='flex-1 h-24rem mr-4 ml-4'>
                            <CardHeader >
                                <img src="/blogs/blog-2.png" style={{ height: '150px' }} />
                                <CardTitle>The importance of social support in pregnancy and ways to connect with others</CardTitle>
                            </CardHeader>
                            
                        </Card>
                        <Card className='flex-1 h-24rem mr-4 ml-4'>
                            <CardHeader >
                                <img src="/blogs/blog-3.jpg" style={{ height: '150px' }} />
                                <CardTitle>Hobbies While Pregnant: 14 New Low-Energy + Fun Ideas</CardTitle>
                            </CardHeader>
                           
                        </Card>
                    </div>
                </p>
                <div className="flex justify-center align-center mt-2 mb-4">
                    <Button variant="outline" href="/blog">Load more</Button>
                </div>
            </div>
        </>
    )
}

export default BlogHomepage;
