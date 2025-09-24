export default function Footer() {
  return (
    <footer className='border-t border-border bg-muted/50 py-6 text-center text-sm text-muted-foreground'>
      <div className='container mx-auto px-4'>
        © {new Date().getFullYear()} Phong Blog. All rights reserved.
      </div>
    </footer>
  )
}
