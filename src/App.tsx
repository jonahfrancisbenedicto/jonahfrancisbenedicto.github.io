import { Mail, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { education, experience, profile, projects, skills, type Entry } from "@/data"

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-8 space-y-4">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  )
}

function EntryCard({ entry }: { entry: Entry }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <CardTitle>{entry.title}</CardTitle>
          <span className="text-xs text-muted-foreground">{entry.dates}</span>
        </div>
        {entry.subtitle && <CardDescription>{entry.subtitle}</CardDescription>}
      </CardHeader>
      <CardContent>
        <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
          {entry.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

const year = new Date().getFullYear()

const nav = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["experience", "Experience"],
]

export default function App() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{profile.name}</h1>
        <p className="text-muted-foreground">{profile.title}</p>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4" />
          {profile.location}
        </p>
        <div className="flex flex-wrap gap-2">
          <a href={`mailto:${profile.email}`} className={buttonVariants()}>
            <Mail />
            Email
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline" })}>
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline" })}>
            LinkedIn
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 pt-2 text-sm">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="text-muted-foreground hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
      </header>

      <Separator className="my-10" />

      <main className="space-y-12">
        <Section id="about" title="About">
          <p className="leading-relaxed text-muted-foreground">{profile.summary}</p>
        </Section>

        <Section id="skills" title="Skills">
          <div className="space-y-3">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="flex flex-col gap-2 sm:flex-row">
                <span className="w-28 shrink-0 text-sm font-medium">{group}</span>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          {projects.map((entry) => (
            <EntryCard key={entry.title} entry={entry} />
          ))}
        </Section>

        <Section id="education" title="Education">
          {education.map((entry) => (
            <EntryCard key={entry.dates} entry={entry} />
          ))}
        </Section>

        <Section id="experience" title="Experience">
          {experience.map((entry) => (
            <EntryCard key={entry.title} entry={entry} />
          ))}
        </Section>
      </main>

      <Separator className="my-10" />

      <footer className="text-sm text-muted-foreground">
        © {year} {profile.name}
      </footer>
    </div>
  )
}
