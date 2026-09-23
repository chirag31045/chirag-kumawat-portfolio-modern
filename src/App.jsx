import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
  Code2,
  Database,
  Server,
  Layers3,
  GitBranch,
  ExternalLink,
  Moon,
  Sun,
  Menu,
  X,
  MessageCircle,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

const profile = {
  name: "Chirag Kumawat",
  role: "Full Stack Developer",
  location: "Jaipur, Rajasthan",
  phone: "+91 8442070655",
  email: "chiragkumawat457@gmail.com",
  linkedin: "https://linkedin.com/in/chirag-kumawat-b58401263",
  github: "https://github.com/chirag31045",
};

const skills = {
  frontend: ["HTML", "CSS", "JavaScript", "Angular", "Bootstrap"],
  backend: ["Node.js", "Express.js", "REST APIs", "Java", "Spring Boot"],
  databases: ["MongoDB", "MySQL"],
  frameworks: ["Spring", "Spring Boot", "ReactJS (Basic)", "Thymeleaf"],
  programming: ["C", "C++", "Java", "JavaScript"],
  tools: ["Git", "GitHub", "Postman"],
};

const projects = [
  {
    title: "Swami Vivekanand Samiti",
    type: "NGO WEBSITE + ADMIN DASHBOARD",
    description:
      "A complete NGO web platform with volunteer management, donations, gallery, certificates, announcements, multilingual content, authentication and responsive admin modules.",
    tags: ["React", "Vite", "Node.js", "MongoDB", "Admin Dashboard"],
    github: "https://github.com/chirag31045/swami-vivekanand-samiti",
    number: "01",
  },
  {
    title: "Real Estate CRM",
    type: "LIVE COMPANY PROJECT",
    description:
      "Live company CRM project for managing real-estate leads and customer interactions, including REST APIs, authentication, lead tracking, follow-ups and database-driven modules.",
    tags: ["Node.js", "Express.js", "Angular", "MongoDB", "REST APIs"],
    number: "02",
    live: true,
  },
  {
    title: "IPL Team Management System",
    type: "FULL STACK PROJECT",
    description:
      "Full-stack application for managing IPL teams and players with CRUD operations, photo uploads, player statistics and a responsive interface.",
    tags: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    github: "https://github.com/chirag31045/FinalProjectIPLTeamManagement",
    number: "03",
  },
];

const education = [
  {
    year: "2025",
    degree: "Master of Computer Applications (MCA)",
    school: "IIMT College of Engineering, Greater Noida (U.P.)",
    logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBgcBAgj/xABGEAABAwMCBAMGAgcDCwUBAAABAgMEAAUREiEGMUFRBxNhFCIycYGRFaEjQlJicrHBM4KSFiRDU1SiwtHh8PE0NWOD0iX/xAAaAQACAwEBAAAAAAAAAAAAAAAABAIDBQEG/8QAPBEAAQMCAwQIBQMDAgcAAAAAAQACAwQREiExQVFhcQUTIoGRobHRFDLB4fBCUvEjM3JiogYVNENTgtL/2gAMAwEAAhEDEQA/ANxoQlQhKhCVCEqEIVfOIrRYmiu6z2o+2QgnK1fJI3P2qJcBqrY4ZJDZguhfCfHNr4puEuLbkPJ9nQlYU6nT5gJIOBz2259642QOOSsmpXwtBcrQTtU0ssj8b7pcLdNtIgTZEYLac1hlwpzuMcqXmJFrLV6OYxzXYhdBfCW9XWdxowxNuUp9osuEocdKhkAY2qMLiXZq2uiY2G7QAt2zTSxVlF68W3LVxPPhJgNSoMd3ywtDmleQPe7g75qh01nWWnH0fjjDr2KvXCHFMHiuE7KgNvthpQQ4l5GMKxnAPI1ax4cLhJTwOhdZyPVJUpUISoQlQhKhCVCEqEJUISoQmJkyPBYXImPtsMo+JxxQAFBNl1rS42ATqFhaQpJCkkZBHI0Lix7x5tscPW+5trbEhQLDqNQ1KTzScem/3pacDVa3RrzYs2LOeGr9M4cu6LlACC6hCkFKxlKgrv8AkfpVDHFpuFoSwtlbhcjr3HXGt8WURJUjB/0cGP8A1AJ/OrOseVQKSnj1HimH+F+NryUOzIFykKHwqkq5D01HauFjzqpCenjyaQEmeBeMYrnmx7ZJacA+Np1IUPkQaBG8aINTA7IlPGR4g2U5Ub22B1UlTiR/Ou/1AuWpZNyqDq1qeWt4qLpUVLKuZJ3JNVG6aGmS2Xwm4t4et9iYs78j2WbrUpwvDSlxRUcYVy5YG/amonttZZFbTyueXjMK7cZcUxuGLGq4L0vOr92O0Ff2qvn27mrHvDRdJwQGZ+FMcHcbWzimOBHX5M1I/SRXD7ye+O49aGSBylPTPhOem9WcchU0su0ISoQlQhKhCVCF5XnG3PpQhfOHiNxBfLpfH4d5CozcZwhuInOhO+yv3iR1pKVzibFegpYY2MDmbdqk2rxMvds4bFpY8sutnSzKc95TbePhx1I6E9K6JnBtlF9FG+TGfBRLXwveuJVG7XSSY8RZ96dOUcufwA7q+m1RsfmcbBWGVjDgjFzuH1VytXCdighBj2xdwd/2i57IPqGh/wAWKTl6QhjyYMRSctTbJz+5vv7XRx6cY7BSud7M0lKiW4iQ0kBIyQNIzsOmaU+Nq5jZmWmzfokTUWPZaO/P19lAdm2vQpx1xx9ABPmKWpwK9zXtknORUcFa8gFxv97eqPi5tjrcgB6JOPW+LHEiTBXHy4GwlTfvHO+djyAySemD2qtjaiR+GOS+V9fzP3CPjKj95U6O4C46mHLltKZXoX5bysA4Bxg7ciOlc+KqogDi1R8U8/MAeYH8puZFj3NBFxiwLmjlreaCHOxw4jkfpTTelHtNpWq1lS0HQt5HLwPuqjdvD+DJP/8ADlOQ5CuUS4EaF+iHRt9DvT8U0M/yGx3FaEdS61z2hvGo5jVUq8RLrb3kW+7oktKjAhtp4khAP7PTB25VY4OGRTMbmO7TNqtfhDw4m8cQe3PvBDNvKXNCF4WtfQbb6e/2qcLLm6WrpsEeEDVfQI5U4sJdBzQhKhCVCEqEJibMjwIrkqY8hlhpOpbizgJHrXCbarrWlxsEhKYVG9qS82Y+nX5oUNOnGc57V1GE3svnvxL4jjcVcQt/hUUKSyPJQ+lGXJBztj07fOk5XYnZLepITDH2jr5I3wzwYxaS2/eI7cu6EBSIS92YwPIu91fu/wDmqJ546YXfmdyrmqLtxXs3zPL3VjkysXBlD/mSJjuQ24tOG2ticJ6J5chvWS981U0yPd2Rs+34FlyVDnDA3Ju73396FsypN1ZZLrZcW2tRfjIXoPIjvgEK6FWTzq98UVM42NgdDa+4+Y3Dgl06q3MB1Ts+QlDzig55La1K0ko0qAT1z3xVbal7gI4m3Ay043B7layCR4u0Zfm1e2rXECVeXAnOoc+JJRoSolOknBxzBP1psQdJSZhtv5v5LpiY3J0jR339AU4u2Nuo0yLZcHU+8P0riV4JAGfj54FS+C6SZmwAcstP5XMMP/lb/u+rU5F8iA86VuyWkuHUpMlrSNWAM6sdh3pKppqogY4tNo7/AHUhTud8hDuRB8tfJDXrfcWoP+autqKGiEOMLOSASsn5rVgferWVNO+TtjU6HwA5NFz4KotLTYqSzdFrGm4tNhpxWlRcGAk6Ssg52wkaR8yaokpG/wDaOYHjmAPE3PKyGuc112mxUyUxEulu9lmsm4QTuEH+3j55FtR3H8J/6VfBXOjPV1Ay3p6Kpuczhdv2H/IfVZ5dLTdOCbjHu9nll2GpWY8xvkR1bcHQ9wedafy2c05LSDmzAxyDPd9QrxI8ZGP8n21x4ajd1ApW2ofomyB8Weo9OdXdeMPFJDo49Zmez5qweGXG3+U8BcecpCbpH3cCRgOJ6KA/I1ZHJiGaXq6bqXXborzViTSoQlQhYv438QyXJjNhbbcaipAddUoEB9XQDuB/P5UtM46LX6OiFjJtWdMX66R7S/ampzyYD3xsavd+Q7A9apDzayfMTC8PtmtC4J4b/A2GZ8lsG8yW9bCHBkQ2j+uR+2eQ7feqqicUrMX6jokqidrgSflH+47uW9TrnOCYy2LY804rUpEkFZD2TtqB75671n08LnSdZUA52I3b7HmNFkyyukdicpcNDqrUyi7gqcBSUjmsqGCM4/W+X9apfZ1SRS53/PDnouMY5+imushLfmXKQmEwVAaErCVEnurvy2H3rcougmiz5zc7lB1XHFlEMR3nTuHv4Ls9SrfalSLJEaW4eim1ZPrgbmvQRQxx9losEm+aSZ39RxKFtJvtyNtlSQBGDqFutpASRvjIBGcAKzuQdqtyFwFDsjIJ7hZyX+Jzo8uc5JDKBsc6QrWrvnoB/wB70PtbJcdayiLvd+RIfYXHaQhDyUo1owV7jKc/CdjnPoa6WtIUg0ahELbLs96yu2uKjSeqU4Qr7fCr571n1XRkEw7bc94TLKyZmUnaHHPwOoXZkYJca/EmWipsnyJIT7gWepSeR5c9q8zVdH1NEHFhJYdbbk00RzC8Ov7Tr9/VB1NSrOApDZL7i8OSFDWCSewwVFR6HOnfHQVEPiqsieyBkNNPIWG3K+SqRVtxqVHeS4wh5p5ITcIBUFdNyOy09D1xj5V087qV+B+bDofqE7BODZjzbcd3PgfLVZbxdw6vh+4IS0558CQnzYj/AO2jsf3hyNarmgZjQrZilxixyI1Wg+D/AAa2pMfiZ6bqV7wZYYVjT0Os9f4avhj/AFLPr6k5xALYByphZSVCEqEKoeKLtrj8Iy3btFbkbaI6F8/NOwweY7/Sq5LBuaaow8ygNNlj3h5ZGps526z2/Mg27Svy84897PuN/U0o2zQXu0C2Kh+jAbE+Q2lX+bckxFuF6TGXPcUHXmnXAgqBzsnPLGMDPasXBJWPMjgcO8C9vssOeXG7s5AZDl7703GZbL7tyciqSp4pDLSwCrV3HYq/kAa67rH4aWM3PDTlxt9VXGzGdbDajCIz8dhySlpD87SdKSrSlP7oPQfma9Z0f0fHSN/1bSlaipEnYZk314n8yQCzWZy4kO3WK6htOSgOEpKSRjCASSEkKIION05HOtQm2ioLraK0sNtxGm2tZOTjUvcrUe/rVZcBqoBpdcgaZr0Hv85LJ2wgLCu+5FRx9rCVLq/6ePjb0TXtRER2QpGShSxpT1wogfeodZ2C4qzqLytjB1t5i6edLeUNvadSuSVDrjf8s1ZiAVIa43I0CA3ThorY02t0x1JCQls7pBGkJ+iQCcep3yc1YHb10P3p+xTJUxUyFOjLWhglvznClXmeisbE43OO+Dg5rjmiy7iLSHNNiuTIgij2d0lUNz3W1E7sq6DPbsenLtXk+k+jjTu+IhGW0fmw7VqRyCqaTo8a8ePPf4oSEPWd5xxRbVknCsHU+TvoQkE8zuT3J2xSRLKpoaL/AEHEmw7hu23VSk3C2sX61LtqgA1Ly9CWoYLEnHL0CuRHcHvV9BKbmnfqNFp08924v1N82+49OSrfhLxIeHr5Is91cDEV8qB804DLyeefmBj6CtKJ2E2KZrYesYHs1+i1a18bWC7XlNqt04SJCkKUChJ0HHMBXWrxI0mwWW+llYzG4ZKx1NULPPE7jmZwpNt0e2oYcW6lbjyXU593YD5daplkw6J6jpWzAlyzHjnjmTxe3CbciiKiNqUpCHNYWs7Z5DGB/M1Q+TGtKmpRBex1V9sdt/B7Nb7aUZWy17ZKSBut9YyE/NKdvqKz+k5bNbCDa+qRqZeyXfuyH+I9yo0MuXSehT8cIVEcOsrOlSkblIKMcuW+eY2qiYNpojgdcOGzQHaQb+W4rMR+ClC1KmOYDTeUtZ2AA5q+vL6etbPQlH1UfXv1OnJRqnFoELdTmfoPzanjPSoOKaacW21utWNONs7A89t62evBvhGQVPwjhYOcAXabfTTPJSitIKQVDKvhGfiq3EErhdmbaIdJecUlyCsF6QceVoG6+v8AdUOe+350lUVDYmESfn3WnTU+N7ZWZN28PcH82Ke1YpMnLs6V5a1t6FNsAEDI33P/AC6Vhy9JyvPYFtibY2CMYWi9je5y5ZBOOcNIyhTUx8FskpCwlQyVBW+w6gdaqbXztIJzspF7CDdoz3X3W9CUNdTLtskGe2XnHPcZcaHukc8DsonoegG+1a1J0g2U9r5lRPStdH/RNmjM317+AG3edM1MZK0ISZDjYWpWyU8gegHfFazSQO2VlPDXE9WMh+XUcPNQm1tsR1+Qx8ZTj3c7nA5nnn61F81iTbRWspy+2YudP52X2KRqYnMLRsttXurSQQflg7g127JWkahV4Zad4OhGYQZYcjsvJWUKkxhpS66nOUHkrbfl0HUV4espPh6kxG+E7vvl4rSkLXgSs0d5HaF4hQn24i0OSUuqWfNS4GyhQWTqyck9cfaqJahvWh7G4SON9EQydW8OVC8ToAFyi3ltsIbuTWXkjkh9HuuD8s/evQOcHtEg2rdpjhvHu05HRCeClXCPxNbpdtivyHGHwVJaQVe6dlfkTzrsdw64U6jAYyHFfT4ORnFPLzazDxF8O7txHeHLpBnRz+jShEd0FOkAftb8zk1RJEXG4WlS1jImYHBZdwpazcOLrdbnACn2oBzScjCDlX02qhjbustKaTDEXDctUm3HyUuzT5RVJfUv9IopGjknfBGyQnnWPKw1NU/XLdn5ZLEqzZ4Z+0W9/O6SZD70BTikhC31hDISQrCVYAORsepqqOma+pZC3Pfz2qEAGO7tBcnkERkpKfIix2wttkJW431KRsAPXIz9K9s4WtG0aJSEg4ppDYuyB47Ty90277SIBchORzl1a3y4Cf0eTkDsrGBUSXdXdluKmwRdfhmB0Abbf7Xzy1ThKERGmJkdwpDaRr06hnA7bjepYhgAcFCx610kThqcr22+BRLhqIose3Pr8117KW1n9VsHYd9+e/cdq8xWSmaa18gtOS0Y6tottPP08EfCaI4kuSmmpDL7jzbTiVLZVocAO6TjOPsRVhiGxSc1zQCRqvE2M3JjLYeSS2sYODy9RSjgWG41C6x5a64VRghMRa2Vx3nZDCi3rCc5x26JBGDzr0tHM2SIPtcqqtY4uyeA05/ztK9whMM14OeQIXva0n+0CzgjfljBpiPGXG+iXn6gQsLb9ZlbdYX87rzHWptbDox5CUBhax+uehHoOWfWuMJBDtmnNTkY1zXM23LgN2+/E6+aduY8l6O90UryV/XkfvgfWs3p6nxwiUfpUKI42vj/APYd2vl6IJIVIiS3JUpSVNIXqQtckpShHYIA3PPnXn4+rkjEbNbbrkniToFNQuOYSZPCVwCRlUKQ3MRjolfuLH3GfrT/AEe7HTFp2Fa9I8nAebfDMI34GzEP8LyIpACo0lQPqFbj+takJ7NlT0i0iUHeFpA9KuWeo1xe8m3yXf8AVtKV9hXDkFJgu4BfPnhWc8TPSlHK2ID72f3sc/zpOM5krfqRdrW7yArfcpRitxo7UoMLbjBatUhLeoctgoHUdqxqSHrA57m3ubfKTn3EWCwp3YpXHiUUhtthdqaa1BpKS4Arnsg4z/iFNdEgyV7nO1F/Zcvhp5Hch4keycltrVNkPYcCApLQca+Jv3Rv3xv6/LrXopAS8nZpkiF7BCyPK+ZsdDn65Zac1IditPvoZKRqQAX1pJGrsknO+cb5zt86sMbXODd2pS7J3xsLxtvYZZbzpla+VrZ8k9MRKU05jyHEEYCC1n/ixVkgeQQNFXA+EPbqDvv9ro5YSk2iFowB5KNhyG1eNGUhB3rWn/uO5qbJeTGjuPKyQhOcDqafEzYYzIdipawvcGqrcOeYze3XFqX/AJ3qKwrlq5j+orHoax0k5Dtq1q0B1OAP0q1rp6eyyQqk/wCau+T/AGd4pIUkFKkKUn4E5I3ArY6JxdVkfVcrXRtjZjbs2EA6ngSvEmOlLiJEgJdQRpe5hPorTnG3XP8AStJ8YBD3Z7/dKRTOLTFGbHUb+IvbbstbPmolzYcKpAb81ZSnzQpX9m0ANgM8jt2P0qmZjswOfBNUckYDCbC+XE894/DcqddwF2l9zqhIdHzSQofyqytbjpXjgkqA4apo3m3jkg91Syt4JESG7JeaKUqfcSlWB0GQSefSvFUrnhty9waCNAbd+gV+i7KaXIsNxYfRpdeszhUk9FJCVfkc090cW9ZK1puPun6U9kcHDzus44K41m8I+1exxmX0ydJUHSRjGe3zrRZIWLUqKZs9rm1ltnAPE8riawm4SmGWXPOU3pbzjAx3+dMseXC6x6mBsT8IKxDjG5XEcT3hgXCZ5QlOJ8vz16dOeWM8qWkJDrLYgjZ1bTZTvC4ZvVxT1VapAH+7XI9q7ObYD/qCuF89qKUOtkiKGgVKC20pBweer+7y9ayKAxfKfmvuJ3bu9edeLOIRaISZ9vKsZUwvOOWSEmm+gyBVuHP1UpP+kfbe36p9LRVeHU4OCUrJ/u4/a9Oxr0dj1x/PqqjJakbnvHnyO/epcD3mPNPN1Slk/Xb8sfaroc233pWpykwftAHv53Xia1G+N9K3FL91KASrf0TyzXJWM1dmpU8kvysIAGuzxOqk8OTCyTb5CFNYUTH1nOpPMpz1I+2Opwa8xXU5hkx2sCtZzhMwPDrnb78kTvLoTESkn43AKy697nQBrdpCnTN7d0yphMe8MIGPg1fkQahJTfDVzQ3TCFMPL4HFSLpcGrfGL7yhtslPVaugFOWdK/A3UqiOMvNgqvFZSokXBA891ZWl5AwFajnAWP642716imgbGwRuHf8AdLVMz3O6yA5DUHZbeD52v3aIoW0lotq3QRg532p+wtZZeM4sQ1QaalbltQQCpWhTROd85Kf2h/I0jJnED3fma16dwbUnde/13H1Cn3j3LPM64jrA/wAJpioygdfcUhRdqqj/AMh6qt8ShpXsTcoLW1q+BtaEqUrGB8XzPKvG9HYxjczI99rd31TTtVObW2bY840lSGvwaQpIWdwnQnGTV1AHCeXEc8+Wqcpv7Z5t+qyvhLhS5cVPvM2wxwphCVLL6ykYJwMYB7VotYX6LYnnZCAXLcvDvhqfw3w97BcFMKe89bmWlkjBxjmB2pqNhaLLGqZ2SvxBNXLww4bny5Ex9mSp99anFESFAajvyoMTTmhlbM1oaNiybw5UIPHbUN4483zois+oI/mKXjyfZa1Ubw4hssVfHrUzcoscSFOpcbRoyhQ90jY7EEZyOdYDKl9LI5oAOe0e2axKltpnc/upJUUGG+pSlFl7QtShgqBygnHzINX9FyCOtHFcYMccjN7T4jtfRTpjakz2HG0pCnB5alnmnBzt8xqFewkaRICNqUgeDA5pOQztzy8sinoR8sORz8TKz/hJyk/0+lTiNhg3Kmo7WGT9w8xkffvUj5Vcl1BfhlTTkmRlxxBynC9CEHoM527k86SnjZhJlzWjTzvDwyHIbd/H2HBR1XchDMWRdIMpYdTgDOvYjqNjn6fWvPVNDEbFjtDe3etiIjETgLbi3DPgiN9vDUa8rSzJhIfSyED2hahjO/Qb9Ooq2ppWzT4y61hZVQtHUgOBzOxQ/JXJllya+ZCH2v0a0kaRyyEkfCR0I339K06SlhjNmm9wk6iokEYwDDhP8E7wdDfK44qbHQ4hvQ6sLKTsoDBI6ZHf5VpsDgLFZcrmOddgtfyXp51LLSnF/CkZ+fYV17sIuuRsMjgwbUNLC/MhML0qCsLVy9xSTqJHzJApXAbtaVodc0tkkbkRkOIOQ8Bmnr2SYQZHN9xDePTOVfkDVXSkojpXnequjh/Wx/tBP0HmUFvMxuLJaTJhMvtPJKQpSgFEgj3cEb8xsDXkaOF0jCWPII8OfurV3iN4ReHr86BpCYAYTjoXFYx9hTfRY7D3natKkbk0b3eg+6jeAUXSzd5pGylttD6An+ta9OMiVZ0m7NrVrmaYWUhl+4gtNgjpeu81uOlWdAVupeOyRua4XBuqsjhfKbMC+c7xd4yeNHr1ZysxxLEhoKTpJ3BIx880kXDFcL0DGHqcD9bWWtSkRpSniFK9kkBMxooWU6m1jVzHTOrasiuDoanGz9XAH1WLUtNmuOuh5j7WQ+2GC8w9HirSht/322VJ0qTlI3Ce2MHPrVdSJ2Oa+TMt26jx3peN+B4eNiMtvKl2krOz7Oyh2cRv/T7GvYQzCophI38IVL4hDVYR8rtOTvzxSkLfde82A0hS2kjdS9IWCM6OXbG/TNWOc5zrsGi5E2NjMM5sHX2aWyv9NNinIKlISpSCgkZKSQSPtTIzGaReAHEA3CqvFhZlTw1JuC4yGkpCGHGVKR/ENPPPrWJVg9aQ4rfoSBCC0IO25boCg4yXJshO7ZWjQ2g9DjmrHril+yNE3Zx1ySM6PcABdQtL4GkS2hlRHZaf1vmN65cO+ZGEt+XwRThjyot1ZEW7F1tasOMJjr98dc52Hz6VdAD1gwlUVRBiONquXWt5ebQyQuV5ynno6RGYOUgubq7qwO3MClnl98RGQWhE2HAGMd23cD4d+0qSx+klSXeiSltPyAyfzP5VNmbyUvJ2YmN5k+NvQKHKd8+ecboipI+azz+w/nXm+n6nE9sAPEpyBnVU9zq/0HuUBtrcibPRObdHsyzrUlKzpSQDlJQc4VkjcY5UlUOjiiMRHaHnpncbNciuId4mzgxw9EhJV+kuEgyVD/4kDSn896dpGGOmAO3NbVJHZ2f6R5nVZ/ap1zhS0C0y5Ed9awlPlOFOSTgZHWr2kg5J57GOHaF19UQG3mYTDch0uvJbAccI3UrG52p8LzTiCSQqV4y2b8R4RXLaTl+3rDyf4OSvy3+lVTNu1N0EmCWx2rDfwS6fhrlyNvkCE3jU8pvCRnYc+f0pTAbXW11rMWG+a0PgK7e3cOJZUcyrOTkdVRVHJP8AdP5VTVw9fBbaElUQ3cWD9Wn+Q08USuXk2xLDdthqLjrusrZQVHSOe/ffYcuvSs6nL6jEZn5AWzI1OWnqdViEIkl7yHDM0LTHfSBIQsYKRjZePTkfT5Uz0TW/DSGGQ9kq7B18YjHzDNvt37OPNFobDceO2hklSQM6iclXrmvYRsDG2asyeV8shc/VPVNUoderQzdWQFnQ6gHQ4Bkj09RS1RTtmHFNUtU6B1xoqjI4ZurSyEsJdSOSkLG/3rLdRzA6XWw3pCncMzZeWOGrq6sAxw2nqpaxgfahtHMdll11fTtGt1bbHZWbS2TnzH1j33MY27D0rTpqZsI4rHqqp053DcilNJRIjIwa4gZIc+tNtjBiJlT7qlFpKjnGep9B/wBKz6qojoYST3J+Jhq5OskyaLX9uZ+6r1xeaDSYLUhKkIJMhRbLmpzY4WBuArc5HXb0ry9O2QuMzx2jpmBrqRfLLcdnimJZDI7F+AbB3KdbITaWG2GWBEdlpCngXCrykAe8rJ7J/mK41r6qpwOdia3ba2StpmdovIybn37B4qgXBa+OuPW40IYjLWmOxj/RsI6/bJ+tbB7b7BbIPw8Bc7XU8ytda8M+G491iXGHHcYcjOBwNpcJQojlkH77Uz1TQbrJNbMWlpOquIqxKJKSlaSlQCknYgjY0IUa4QmJ8F+FJQFMPNltafQiuEXFlJri04gvnJ1M7w+40Uke8Yy8b8n2FdD8x9jSRvG5egBbUw3/AC606HIjKZjPQnNdvmJ1RF/s9S0exTy+VY3SFLgd1jNCsupjLryW7Q+b/wCuR8jzQ165OsXdwLY0tpSQvf8AVyMLUcdtQAGe1SZStkpxY3P85DPxOW9IbURt8xMdBVGKnoRJy2B77B67HfHpzFaFB0m+nIgqNNh/NeaslY2qzOT9+x3PceOh2o2y82+0HWXErQrkpJ2Neoa9rxibosuSN8bsDxYr3UlBKhC7QhcoQlQhQplwQwvyWUh6SeTYOyfVR6Cka2vipW3cc9ycp6R0gxv7LN/tvQSc+7G3aWXp7+5cCQRpT8QQCQNu2e5ryjpHVkpln+UeV9O470494IDGCzRoPqd5/gJi3sMq8q5uJVHDIKdKeaumx6pJJOOp74FRqJXjFTg4sX547OAUY2OkcGt1P5+FC+Pb2q0wHba2rF0uCB7Tg/8Apo/MNfxE5J/8VpU8IposO06rZp4gbBvyt83b+W5BfC3iS18N3h526sqAfQG0SRv5I65HY7b+lMROa05qdbC+VnZ2L6HbWlxtDiDqQoApPcGnFgkWyXqhCVCEM4iNzFnlmx+V+IBslkOjIJ7fPtXHXtkrIsGMY9F8u3B+XJmvu3Fx1yWpZ80un3tWdwe3yrPde+a9K0NAs3RHuEOI1WB52Bc2XHLXIUC+wRhbK9sOI7KG3zxUgRbC8ZKmWPFZ7Pm9RuPArSX0tyorI9pS9GeKVxJzYBSsg5APQLB5pPPp2GTNTOpX42C7TfzWRNT6ujGmo2j3HHZtUmFGERrRqK3FHU44rmtR5k1nzSmV19ANBuG5JpvSx7YtMSSGJmkLcQ2oZUO6k9fnzpumq6qlaHsvh8laJcTcEgxDjqOR2eilIny2tn4odT+2wrf/AAq/5mt2D/iCI5Si3oqHUcL/AO2/DwcPqL+gTgvEQHDgfaP77Cx+eMVpM6UpHi4eFWejp/02PJw97+S6bzb/APaM/wAKFH+lWHpClH6wuDo6q/Z5j3Xg3ZCh/m8WU6Tyy35Y/wB7FKy9NUkejr8lMdHuH9x7R339Lpl1ya+D5zyIrYG6WVZV9VHl9BWPU9PSydmEW9VcyOmiPZGI8ch4e5XYyGWmh7NpDatwpBzq9c9fnWDI5znEv18118j5Ddxv+bFAet0JmUua6nCVYIRjOlzPNGN8nqBz2pplTO+MRN19RuO+2zciON8jsLRc/nkofE/ETXDrQdkJS5d1jVFhKORHzydd/e7J/wCxq0lI2mbid83otSngvdrDltO/gOHHaqhwjwZdeN3pc9+QppolSlS3hq8109B39T0pxsZfmUxPUspwGgdyO8D+Gk9PEylcRRgiJBIWBzRIV0weqepqUcRxZqiprW9X/TOq24DAAppY67QhKhCVCFWXeBrE/wASG+vRAuSQCW1AFsrH65TjdX/KodW0m6YFVKI+rByQrxE8P4/EzRmQdEe6NpwFkYQ8B0Vjr2NRkjxaK2lqzCcLswscsPEVw4XlSIpS3IiKWUSYLx1NrIOCR2PqKWDsNwcwtd8TZLOGR2FaRYrzCvKNVkkeYvmq3SnAmQ3/AAK5OD57+vSs+fo1knahyO5Z09OD8/ZO8fKeY2d2XBT20xDMW75KW5pSEOBxGhzT2IO+Ky5Wzxt6p98I2bOaSkp5GC5GW/Yh6ly4ocW608jXLDjjjfvjy+gAG/JKQduppkNikIwkZNyByz4+JN+CoUX8anMxpDzymGnGkKcEVxBC1DRrByD6gfQ75q/4KBz2tbcg2GIWtrb7+CF17iGU0lS1R0gBDpUnfWyUlIGsZ/e3x0IrjOjonWGLdyN7nLw27t6F5dn3SQnMVep/9IpyMlvGgD4Rq9R171NlPTRntjs5WN7335cD5IU21wn2WJSLmtLjLqEJCnFZKhpwQr16etKVNRG5zTDkRfTnlb8yUgHE2Cmw222oSW7ay23CZTj2h1XlsNj+I8/pmptpKiqeZJMr6kpltKR/cy4au8PdVO+8dRbcpTdiWJs/Gk3BxGG2u/ko/wCI1qwwxU4swXO9aUdPcWthbu2n/I/QZKgNSEP3NuRdlPyGlPBUlWv9ItOfe3PXFTBuc05Yhtm5L6jsIt34PD/Bw2IJaSWA2NtOP50+21sl5qTFjOPVEK6oJUISoQlQhKhCVCEG4ujXSXw/Mj2N1tqa4jShazjbrg9Djkai65GSthLGyAv0XzRJtFxjXT8LkRHkTysJDCh7yiTtjuD3pEtN7L0TZGubjByVrvfhjxHZmm5UZImpSkKUYpIcbPXbn9RVpic3MJaOuhkyOXNQrfx5eogEW5oZujDZx5U9vK0fJfxA/eoF+Vni6s6ht8UZw33eysUHjqwulJebuttV1CFpkN/73vCln0dK85tsqH0zjq1rvI+WXkijfEljfGUcRQQCMFMmG4g47HfFUnoyP9LylzSM2xnuIP0ThvtkBK/8obNkjchlxRNH/LBtkyXBSM/a7yUWTxfw+wk671IkH9mDC0/mvIqTejaZupJVjaMXyj8T7WQO4eIMRv8A9pswcX/r7o4XiD6IHuimY44Yv7bUyyB+lwB/pFvPVATL4k45ujcMvuzHjlSGNYQ2gDmdPICrLuebKy0VO3FotJ4a8IYEZhTnELypT60kBtolKG89c8yR9qvbABqs6XpB5NoxZArT4Q3By+vs3J7y7Uwv3Xkka309MDp6moiDPPRXv6QZgBaM/RbJabZEtEBmFb2QzHaThKB/P50wAALBZD3ue4udqpldUUqEJUISoQlQhKhCWKEKK9AivymJT0ZpciPktOKSCpGdjg1ywUg5wFgVJ6V1RXzx4wSHpHGclTkdxphpKGW1qbKQ5gZJzjfcn7UnNcuW9QgCEZ5peHXAyOL2Zz0iU7GajlKG1tpB1LOSc57DH3ojixoq6owEAC6N3Xwbkw4siSzemnG2W1OaFsEEgDOM59KkYLZ3VLOkQ4gFqy/OwOKXWmtU4V8Jo13s8K5zLq8BJZS75TTQGnI5ZOaZZCCLlZc1eWPLQ3RNeJHh5b+H7DHm2ZEha0PBD5WsrKgrYbfP+dEkQAuFKkrHSvIkUDw44U4nZ4hgXZq3rjxml5WuQoI1IIwQBzO3pUY2OvdTq54TGWXzW+AbU2sNdoQlQhKhCVCEqEJUISoQlQhKhCVCEqEJmRHYktluQ0h1B5pWkKH50WXQSMwo9stNvtLTjVtiNRm3FlxaGk4BVgDP5CuAAaKT5HPzcbqRMZTIiPsOZ0ONqQrHYjFB0UWmzgVmLPhRw8UjL1wP/wByf/zVHUtWka+W+xaNY4DNrtMSBGKyzHaCEazk4HerwLCyz5HF7y4qYpIVzGa6oLoFCF2hCVCEqEJUISoQlQhf/9k=",
    badge: "AKTU",
  },
  {
    year: "2022",
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Shree Balaji College, Sikar (Raj.)",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxqHzQqKMOo-EuERo9RN_w8mw2H7V1_nLd8kToF7aRIQ&s",
    badge: "PDSU",
  },
  {
    year: "2019",
    degree: "Senior Secondary Education",
    school: "Vinayak School, Sikar (Raj.)",
    logo: "https://thumb.wikimedia.org/wikipedia/en/thumb/a/a4/BSER-Logo.png/250px-BSER-Logo.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    badge: "RBSE",
  },
  {
    year: "2017",
    degree: "Secondary School Education",
    school: "Vinayak School, Sikar (Raj.)",
    logo: "https://thumb.wikimedia.org/wikipedia/en/thumb/a/a4/BSER-Logo.png/250px-BSER-Logo.png?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail",
    badge: "RBSE",
  },
];

function SectionTitle({ number, eyebrow, title }) {
  return (
    <div className="section-title">
      <span>
        {number} — {eyebrow}
      </span>
      <h2>{title}</h2>
    </div>
  );
}

function LogoBadge({ logo, badge }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="edu-logo">
      {!failed ? (
        <img src={logo} alt={`${badge} logo`} onError={() => setFailed(true)} />
      ) : null}
      <span>{badge}</span>
    </div>
  );
}

export default function App() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("chirag-theme") === "dark",
  );
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("chirag-theme", dark ? "dark" : "light");
  }, [dark]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <div className="site">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav">
        <button
          className="brand"
          onClick={() => scrollTo("home")}
          aria-label="Home"
        >
          <span className="brand-mark">CK</span>
          <span className="brand-name">
            Chirag<span>.</span>
          </span>
        </button>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          {["about", "skills", "experience", "education", "contact"].map(
            (x, i) => (
              <button key={x} onClick={() => scrollTo(x)}>
                <small>0{i + 1}</small>
                {x}
              </button>
            ),
          )}
        </nav>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            className="nav-github"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} />
          </a>
          <button className="mobile-menu" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="availability">
            <i /> Available for Full Stack / Java opportunities
          </div>

          <div className="hero-grid">
            <div className="hero-content">
              <p className="kicker">
                FULL STACK DEVELOPER · 6 MONTHS EXPERIENCE
              </p>
              <h1>
                Building digital
                <br />
                <em>experiences</em> that work.
              </h1>
              <p className="hero-copy">
                I'm <strong>Chirag Kumawat</strong>, a Full Stack Developer
                focused on building scalable APIs, responsive interfaces and
                practical business applications with Node.js, Angular, Java and
                MongoDB.
              </p>

              <div className="hero-actions">
                <button className="primary" onClick={() => scrollTo("contact")}>
                  Let's connect <ArrowUpRight size={18} />
                </button>
                <a
                  className="secondary"
                  href="/Chirag_Kumawat_ATS_Resume.pdf"
                  download="Chirag_Kumawat_ATS_Resume.pdf"
                >
                  <Download size={18} /> Resume
                </a>
              </div>

              <div className="location">
                <MapPin size={16} /> Jaipur, Rajasthan
                <span className="dot-sep">•</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="code-card">
                <div className="window-bar">
                  <span />
                  <span />
                  <span />
                  <label>chirag.dev</label>
                </div>
                <div className="code-body">
                  <div>
                    <b>const</b> developer = &#123;
                  </div>
                  <div>
                    &nbsp;&nbsp;name: <strong>"Chirag Kumawat"</strong>,
                  </div>
                  <div>
                    &nbsp;&nbsp;role: <strong>"Full Stack Developer"</strong>,
                  </div>
                  <div>&nbsp;&nbsp;stack: [</div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>"Node.js"</strong>,{" "}
                    <strong>"Angular"</strong>,
                  </div>
                  <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>"Java"</strong>,{" "}
                    <strong>"MongoDB"</strong>
                  </div>
                  <div>&nbsp;&nbsp;]</div>
                  <div>&#125;;</div>
                  <div className="code-cursor">▋</div>
                </div>
              </div>
              <div className="float-card float-top">
                <Sparkles size={16} />
                <span>
                  Clean UI
                  <br />
                  <b>Responsive</b>
                </span>
              </div>
              <div className="float-card float-bottom">
                <BriefcaseBusiness size={16} />
                <span>
                  Real Estate
                  <br />
                  <b>CRM Project</b>
                </span>
              </div>
            </div>
          </div>

          <div className="stats">
            <div>
              <b>6</b>
              <span>Months Experience</span>
            </div>
            <div>
              <b>3+</b>
              <span>Projects</span>
            </div>
            <div>
              <b>2</b>
              <span>Database Systems</span>
            </div>
            <div>
              <b>MCA</b>
              <span>Graduate · 2025</span>
            </div>
          </div>
        </section>

        <section id="about" className="section container">
          <SectionTitle number="01" eyebrow="Who I am" title="About Me" />
          <div className="about-grid">
            <div className="big-statement">
              I turn ideas into <mark>useful products</mark> with clean code,
              reliable APIs and interfaces people enjoy using.
            </div>
            <div className="about-text">
              <p>
                Motivated Full Stack Developer with 6 months of internship
                experience building real-world applications using Node.js,
                Angular and MongoDB.
              </p>
              <p>
                Experienced in REST APIs, authentication, CRUD operations, lead
                tracking, follow-ups and database-driven features.
              </p>
              <div className="mini-pills">
                <span>Problem Solver</span>
                <span>Team Player</span>
                <span>Clean Code</span>
              </div>
            </div>
          </div>
          <div className="focus-grid">
            <article>
              <Code2 />
              <span>01</span>
              <h3>Frontend</h3>
              <p>
                Responsive interfaces using Angular, HTML, CSS, JavaScript and
                Bootstrap.
              </p>
            </article>
            <article>
              <Server />
              <span>02</span>
              <h3>Backend</h3>
              <p>
                REST APIs, authentication and business logic using Node.js,
                Express and Spring Boot.
              </p>
            </article>
            <article>
              <Database />
              <span>03</span>
              <h3>Database</h3>
              <p>
                MongoDB and MySQL integration for structured, reliable
                application data.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="section section-alt">
          <div className="container">
            <SectionTitle
              number="02"
              eyebrow="My toolkit"
              title="Technical Skills"
            />
            <div className="skill-grid">
              {[
                ["Frontend", skills.frontend, Code2],
                ["Backend", skills.backend, Server],
                ["Databases", skills.databases, Database],
                ["Frameworks", skills.frameworks, Layers3],
                ["Programming", skills.programming, Code2],
                ["Tools & Version Control", skills.tools, GitBranch],
              ].map(([name, list, Icon]) => (
                <article className="skill-card" key={name}>
                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>
                  <div className="skill-title">
                    <h3>{name}</h3>
                    <span>→</span>
                  </div>
                  <div className="chips">
                    {list.map((x) => (
                      <span key={x}>{x}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section container">
          <SectionTitle
            number="03"
            eyebrow="What I've built"
            title="Experience & Projects"
          />

          <div className="experience-banner">
            <div className="experience-marker">
              <BriefcaseBusiness />
            </div>
            <div>
              <span className="eyebrow">PROFESSIONAL EXPERIENCE</span>
              <h3>Full Stack Developer Intern</h3>
              <p>6 Months · Live Real Estate CRM Company Project</p>
            </div>
            <div className="experience-stack">Node.js · Angular · MongoDB</div>
          </div>

          <div className="project-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.title}>
                <div className="project-number">{p.number}</div>
                <div className="project-head">
                  <span>{p.type}</span>
                  {p.live ? (
                    <b className="live-dot">
                      <i /> LIVE
                    </b>
                  ) : null}
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="chips">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      <Github size={16} /> GitHub <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="company-project">
                      <BriefcaseBusiness size={16} /> Live Company Project
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section section-alt">
          <div className="container">
            <SectionTitle
              number="04"
              eyebrow="My background"
              title="Education"
            />
            <div className="education-list">
              {education.map((e) => (
                <article className="education-row" key={e.year + e.degree}>
                  <div className="edu-year">{e.year}</div>
                  <LogoBadge logo={e.logo} badge={e.badge} />
                  <div className="edu-info">
                    <h3>{e.degree}</h3>
                    <p>{e.school}</p>
                  </div>
                  <ArrowUpRight className="edu-arrow" size={20} />
                </article>
              ))}
            </div>

            <div className="cert">
              <div className="cert-icon">
                <Layers3 />
              </div>

              <div className="cert-content">
                <span>CERTIFICATION</span>

                <h3>Full Stack Java Developer Certification</h3>

                <p>Ducat, Noida Sector 16 · Aug 2022 – Jan 2023</p>

                <a
                  href="/Chirag_Kumawat_Full_Stack_Java_Certificate.pdf"
                  download="Chirag_Kumawat_Full_Stack_Java_Certificate.pdf"
                  className="certificate-download"
                >
                  <Download size={15} />
                  Download Certificate
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact container">
          <div className="contact-box">
            <div>
              <span className="kicker">05 — LET'S CONNECT</span>
              <h2>
                Let's build
                <br />
                <em>something great.</em>
              </h2>
              <p>
                Open to Full Stack Developer and Java Developer opportunities.
                If you're hiring, collaborating or simply want to connect, reach
                out.
              </p>
            </div>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                <Mail /> <span>Email</span>
                <b>{profile.email}</b>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin /> <span>LinkedIn</span>
                <b>Connect with me</b>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github /> <span>GitHub</span>
                <b>View my code</b>
              </a>
              <a
                href="https://wa.me/918442070655"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle /> <span>WhatsApp</span>
                <b>+91 8442070655</b>
              </a>
              <a href={`tel:${profile.phone}`}>
                <Phone /> <span>Phone</span>
                <b>{profile.phone}</b>
              </a>
              <a
                className="resume-contact"
                href="/Chirag_Kumawat_ATS_Resume.pdf"
                download="Chirag_Kumawat_ATS_Resume.pdf"
              >
                <Download /> <span>Resume</span>
                <b>Download PDF</b>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <button
              className="brand footer-brand"
              onClick={() => scrollTo("home")}
            >
              <span className="brand-mark">CK</span>
              <span className="brand-name">
                Chirag<span>.</span>
              </span>
            </button>
            <p>Full Stack Developer · Jaipur, Rajasthan</p>
          </div>
          <div className="footer-center">
            <span>© {new Date().getFullYear()} Chirag Kumawat</span>
          </div>
          <div className="footer-social">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin />
            </a>
            <a
              href="https://wa.me/918442070655"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
