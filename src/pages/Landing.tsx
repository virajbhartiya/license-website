import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Heart, Github } from 'lucide-react'

export const Landing = () => {
  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <p className="text-6xl font-bold gradient">
        {' '}
        Open Source License Generator
      </p>

      <div className="gradient text-md">
        MacOS <span className="text-white">|</span> Windows{' '}
        <span className="text-white">|</span> Linux
      </div>
      <CodeBlock className="m-4">$ license install mit -y 2024 </CodeBlock>
      <a
        href="https://github.com/virajbhartiya/license"
        target="_blank"
        className="gap-4"
      >
        <Button className="rounded-sm accent rounded-lg" variant={'outline'}>
          <Github className="p-1" /> Download Source
        </Button>
      </a>
      <div className="absolute bottom-0 p-4 flex justify-center items-center align-center">
        Made with{' '}
        <Heart fill="#00efa6" stroke="#00efa6" className="m-1" size={16} /> by
        <a href="https://virajbhartiya.com/" target="_blank">
          <Button variant={'link'} className="accent p-1 underline">
            Viraj Bhartiya
          </Button>
        </a>
      </div>
    </div>
  )
}

export const CodeBlock = ({
  children,
  className,
}: {
  children: React.ReactNode
  className: string
}) => {
  return (
    <pre
      className={cn(
        'p-2 rounded-lg text-sm border text-white/75 bg-zinc-950 dark:bg-zinc-900 items-center ',
        className
      )}
    >
      {children}
    </pre>
  )
}
