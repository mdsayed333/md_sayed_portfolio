import React from "react";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiFirebase, SiHeroku, SiJsonwebtokens } from "react-icons/si";
import { DiJavascript1, DiGit } from "react-icons/di";

const Skills = () => {
  return (
    <div className="p-12">
      <h2 className="text-4xl font-bold text-center my-8">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

        <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:text-primary">
          <figure class="px-10 pt-3">
            <FaHtml5 className="text-5xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-semibold">HTML</h2>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:text-primary">
          <figure class="px-10 pt-3">
            <FaCss3Alt className="text-5xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-semibold">CSS</h2>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:text-primary">
          <figure class="px-10 pt-3">
            <FaBootstrap className="text-5xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-semibold">Bootstrap</h2>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:text-primary">
          <figure class="px-10 pt-3">
            <SiTailwindcss className="text-5xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-semibold">Tailwind CSS</h2>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:text-primary">
          <figure class="px-10 pt-3">
            <DiJavascript1 className="text-5xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-semibold">javaScript</h2>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:text-primary">
          <figure class="px-10 pt-3">
            <FaReact className="text-5xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-semibold">React</h2>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:text-primary">
          <figure class="px-10 pt-3">
            <FaNodeJs className="text-5xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-semibold">NodeJs</h2>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:text-primary">
          <figure class="px-10 pt-3">
            <SiExpress className="text-5xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-semibold">ExprssJs</h2>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:text-primary">
          <figure class="px-10 pt-3">
            <SiMongodb className="text-5xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-semibold">MongoDB</h2>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:text-primary">
          <figure class="px-10 pt-3">
            <SiFirebase className="text-5xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-semibold">Firebase</h2>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:text-primary">
          <figure class="px-10 pt-3">
            <DiGit className="text-5xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-semibold">GIT</h2>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:text-primary">
          <figure class="px-10 pt-3">
            <SiHeroku className="text-5xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-semibold">Heroku</h2>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:text-primary">
          <figure class="px-10 pt-3">
            <SiJsonwebtokens className="text-5xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-semibold">JWT Token</h2>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl hover:shadow-2xl hover:text-primary">
          <figure class="px-10 pt-3">
            <FaGithub className="text-5xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title font-semibold">Github</h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
