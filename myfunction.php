<?php 
/*check for for duplicate entry function V 1.0
** $column=>>which column you want to find 
** $conn===>Your PDO object 
** $data==>the data to be checked
** $tabel====>the name of your Table
** you must filter all your input field
** if the entered informations are present then will give True
*/ 
function checkInDb($conn,$tabel,$column,$datas){
$query="SELECT * FROM ".$tabel." WHERE ".$column."=:data; ";
$get=$conn->prepare($query);
$get->bindParam(":data",$data);
$get->execute();
$row=$get->rowCount();
if($row==0){return false;}
else{return true ;}
}

// =================================================================================
/* get a table form the data base function V1.0
**chosse which column name and which from database
**$conn=> your PDO object
** $table which table
**$column_table_name=> the name oh the headers of table
**$column_table_name_in_database=>same column's name as in dababase
**$add_somthing_to_the_last_table_column =>
if you want to add a only one column to the table 
and write what inside this column(must be in the last of the variale ($column_table_name));
variable sytaxe exemple=>>>:
$column_table_name=array("ID","Email","Usename","registered Date","Actions");
$column_table_name_in_database=array("id","email","username","registered Date",);
$add_somthing_to_the_last_table_column= '<td><button type="button" class="btn btn-warning">Add</button><button type="button" class="btn btn-danger">Deleate</button></td>';
**add classes as you want ^__^
*/
function fetch_database_to_table( $conn,$table,$column_table_name, $column_table_name_in_database,$add_somthing_to_the_last_table_column=""){
$query="SELECT * FROM ".$table ;
$get=$conn->prepare($query);
$get->execute();
$row_num=$get->rowCount();
$data=$get->fetchALL(PDO::FETCH_ASSOC);
echo'<table border="1">';
for ($i=0;$i<count($column_table_name);$i++){
echo '<th>'. $column_table_name[$i].'</th>'; }
for ($i=0;$i<$row_num;$i++){
echo'<tr>';
for ($j=0;$j<count($column_table_name_in_database);$j++){
    echo '<td>'.$data[$i][$column_table_name_in_database[$j]].'</td>';}       
    echo  $add_somthing_to_the_last_table_column;
echo'</tr>';}
echo '</table>';
}
//===========================================================================
?>
