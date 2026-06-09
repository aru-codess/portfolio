import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MailIcon, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {

  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
        <span className="flex flex-col gap-4 md:flex-row md:items-center md:space-x-4">
          <p className="text-xs text-muted-foreground">
            Built by{" "}
            <span className="text-foreground font-semibold">\n              Anurup Bhowmick\n            </span>
          </p>
          <hr className="hidden h-6 border-l border-muted md:flex" />
          <span className="flex flex-row items-center space-x-3">
            <Link
              href="https://github.com/aru-codess"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
              title="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/anurup-bhowmick/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="https://x.com/aru_codes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition"
              title="Twitter/X"
            >
              <Twitter className="h-4 w-4" />
            </Link>
          </span>
        </span>
        <Link
          href="mailto:anurupbhowmick.official@gmail.com"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"}>
            <MailIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">anurupbhowmick.official@gmail.com</span>
          </Button>
        </Link>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
