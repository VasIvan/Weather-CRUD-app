using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Fullstack.Models
{
    public class Weather
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column("Day", TypeName = "DateTime2")]
        public DateTime Day { get; set; }

        [Required]
        [MaxLength(32)]
        public string City { get; set; }

        [Required]
        [Range(-99, 99)]
        public int Temperature { get; set; }

        [Required]
        [Range(0, 100)]
        public int Rain { get; set; }

        [Required]
        [Range(0, 100)]
        public int Wind { get; set; }
    }
}
