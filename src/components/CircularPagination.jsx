import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 
export function CircularPagination({totalPages, currentPage, onPageChange}) {
  const displayedPages = totalPages > 10 ? 10 : totalPages;
 
  const getItemProps = (index) =>
    ({
      variant: currentPage === index ? "filled" : "text",
      color: "white",
      onClick: () => onPageChange(index),
      className: "rounded-full",
});
 
const next = () => {
    if (currentPage === 10) return;
    onPageChange(currentPage + 1); // Próxima página
  };

  const prev = () => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1); // Página anterior
  };
 
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full text-white"
        onClick={prev}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
      {[...Array(displayedPages)].map((_, index) => (
            <IconButton {...getItemProps(index + 1)} key={index + 1}>
              {index + 1}
            </IconButton>
          ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full text-white"
        onClick={next}
        disabled={currentPage === 10}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}