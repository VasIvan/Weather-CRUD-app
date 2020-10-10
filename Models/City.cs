using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Fullstack.Models
{
    [Table("City")]
    public class City
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(32)]
        [Column(TypeName = "nvarchar(32)")]
        public string RegisterCity { get; set; }
    }
}
