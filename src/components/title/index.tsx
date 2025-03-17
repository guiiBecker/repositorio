import fotoPerfil from "@/assets/Profilefv.jpeg";


export default function MainTitle() {
    return (
      <main className="flex flex-col items-center justify-center py-4 mt-20">
        {/* Imagem acima do nome */}
        <img 
          src={ fotoPerfil.src } 
          alt="Foto de Guilherme Becker" 
          className="w-32 h-32 rounded-full mb-4 shadow-lg"
        />
  
        {/* Nome */}
        <h1 className="text-2xl font-bold">Guilherme Becker</h1>
  
        {/* Descrição */}
        <p className="text-lg text-gray-600 mt-2">
          FullStack Developer | TypeScript
        </p>
      </main>
    );
  }